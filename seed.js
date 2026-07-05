const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database with dummy data...');

  // Create collections
  const cs101 = await prisma.collection.create({
    data: {
      name: 'CS101 Final Projects',
      password: 'password123',
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day from now
      submissions: {
        create: [
          {
            studentName: 'Alice Johnson',
            fileName: 'Algorithm_Optimization.pdf',
            fileData: Buffer.from('Dummy PDF Content').toString('base64'),
          },
          {
            studentName: 'Bob Smith',
            fileName: 'Database_Scaling_Presentation.pptx',
            fileData: Buffer.from('Dummy PPTX Content').toString('base64'),
          }
        ]
      }
    },
  });
  console.log('Created collection:', cs101.name);

  const marketing = await prisma.collection.create({
    data: {
      name: 'Marketing Seminar Q3',
      password: 'marketingpass',
      expiresAt: new Date(Date.now() + 48 * 60 * 60 * 1000), 
      submissions: {
        create: [
          {
            studentName: 'Sarah Williams',
            fileName: 'Q3_Campaign_Strategy.key',
            fileData: Buffer.from('Dummy Keynote Content').toString('base64'),
          },
          {
            studentName: 'Michael Brown',
            fileName: 'Social_Media_Metrics.pdf',
            fileData: Buffer.from('Dummy PDF Content').toString('base64'),
          },
          {
            studentName: 'Emily Davis',
            fileName: 'Brand_Awareness_Study.pptx',
            fileData: Buffer.from('Dummy PPTX Content').toString('base64'),
          }
        ]
      }
    },
  });
  console.log('Created collection:', marketing.name);

  const design = await prisma.collection.create({
    data: {
      name: 'UI/UX Design Review',
      password: 'designpass',
      expiresAt: new Date(Date.now() + 72 * 60 * 60 * 1000), 
      submissions: {
        create: [
          {
            studentName: 'David Lee',
            fileName: 'User_Journey_Map.pdf',
            fileData: Buffer.from('Dummy PDF Content').toString('base64'),
          }
        ]
      }
    },
  });
  console.log('Created collection:', design.name);

  console.log('Seeding finished successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
