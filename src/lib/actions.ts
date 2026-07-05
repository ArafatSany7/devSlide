"use server";

import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";

export async function createCollection(formData: FormData) {
  const name = formData.get("name") as string;
  const password = formData.get("password") as string;
  
  if (!name || !password) {
    return { error: "Name and password are required" };
  }

  try {
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
    
    const collection = await prisma.collection.create({
      data: {
        name,
        password,
        expiresAt,
      },
    });
    
    return { success: true, collectionId: collection.id };
  } catch (error) {
    console.error("Error creating collection:", error);
    return { error: "Failed to create collection" };
  }
}

export async function joinCollection(formData: FormData) {
  const collectionId = formData.get("collectionId") as string;
  const password = formData.get("password") as string;
  
  if (!collectionId || !password) {
    return { error: "Collection ID and password are required" };
  }

  try {
    const collection = await prisma.collection.findUnique({
      where: { id: collectionId },
    });
    
    if (!collection) {
      return { error: "Collection not found" };
    }
    
    if (collection.password !== password) {
      return { error: "Incorrect password" };
    }
    
    if (collection.expiresAt < new Date()) {
      return { error: "This collection has expired" };
    }
    
    return { success: true, collectionId: collection.id, name: collection.name };
  } catch (error) {
    return { error: "Failed to join collection" };
  }
}

export async function submitPresentation(collectionId: string, formData: FormData) {
  const studentName = formData.get("studentName") as string;
  const file = formData.get("file") as File;
  
  if (!studentName || !file) {
    return { error: "Student name and file are required" };
  }
  
  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const fileData = buffer.toString('base64');
    const fileName = file.name;
    
    await prisma.submission.create({
      data: {
        studentName,
        fileName,
        fileData,
        collectionId,
      },
    });
    
    revalidatePath(`/collections/${collectionId}`);
    
    return { success: true };
  } catch (error) {
    console.error("Error submitting presentation:", error);
    return { error: "Failed to submit presentation" };
  }
}

export async function getCollectionStats() {
  try {
    const activeCollections = await prisma.collection.count({
      where: {
        expiresAt: {
          gt: new Date()
        }
      }
    });
    
    const totalSubmissions = await prisma.submission.count();
    

    const recentCollections = await prisma.collection.findMany({
      where: {
        expiresAt: {
          gt: new Date()
        }
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 3,
      select: {
        id: true,
        name: true,
        createdAt: true,
        _count: {
          select: { submissions: true }
        }
      }
    });
    
    return { activeCollections, totalSubmissions, recentCollections };
  } catch (error) {
    return { activeCollections: 0, totalSubmissions: 0, recentCollections: [] };
  }
}
