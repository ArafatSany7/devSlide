import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Layers, ArrowLeft, Download, Clock, File as FileIcon } from "lucide-react";
import UploadForm from "./UploadForm";

export default async function CollectionPage({ params, searchParams }: { params: Promise<{ id: string }>, searchParams: Promise<{ auth?: string }> }) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const collectionId = resolvedParams.id;
  const auth = resolvedSearchParams.auth;

  const collection = await prisma.collection.findUnique({
    where: { id: collectionId },
    include: {
      submissions: {
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (!collection) {
    notFound();
  }


  if (auth !== collection.password) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Unauthorized</h1>
          <p className="text-slate-400 mb-6">Please join via the join page with the correct password.</p>
          <Link href="/join" className="btn-gradient px-6 py-3 rounded-xl font-semibold inline-block">
            Go to Join Page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="fixed inset-0 z-0" style={{
        background: "#020617",
        backgroundImage: `linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)`,
        backgroundSize: "32px 32px, 32px 32px, 100% 100%",
      }} />
      
      <div className="relative z-10 min-h-screen pb-20">
        <nav className="glass-effect border-b border-indigo-500/10 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <Link className="flex items-center gap-3 group" href="/">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg shadow-indigo-500/20">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white hidden sm:block">devSlide</span>
              </Link>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <h2 className="text-white font-semibold">{collection.name}</h2>
                  <p className="text-slate-400 text-xs">ID: {collection.id}</p>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12">
          <div className="grid lg:grid-cols-3 gap-8">
            
            
            <div className="lg:col-span-1">
              <div className="glass-effect rounded-2xl p-6 border border-indigo-500/20 sticky top-28">
                <h3 className="text-xl font-semibold text-white mb-6">Submit Presentation</h3>
                <UploadForm collectionId={collection.id} />
              </div>
            </div>

            
            <div className="lg:col-span-2">
              <div className="glass-effect rounded-2xl p-6 border border-indigo-500/20 min-h-[500px]">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-700/50">
                  <h3 className="text-xl font-semibold text-white">Recent Submissions</h3>
                  <div className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
                    {collection.submissions.length} Total
                  </div>
                </div>

                {collection.submissions.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-64 text-center">
                    <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4">
                      <Clock className="w-8 h-8 text-slate-500" />
                    </div>
                    <p className="text-slate-400 text-lg">No submissions yet.</p>
                    <p className="text-slate-500 text-sm mt-1">Presentations uploaded by students will appear here in real-time.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {collection.submissions.map((sub: any) => (
                      <div key={sub.id} className="flex items-center justify-between p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center shrink-0">
                            <FileIcon className="w-5 h-5 text-indigo-400" />
                          </div>
                          <div>
                            <p className="text-white font-medium">{sub.studentName}</p>
                            <p className="text-slate-400 text-sm">{sub.fileName}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <p className="text-slate-500 text-xs hidden sm:block">
                            {new Date(sub.createdAt).toLocaleTimeString()}
                          </p>
                          <a 
                            href={`data:application/octet-stream;base64,${sub.fileData}`} 
                            download={sub.fileName}
                            className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 transition-colors"
                            title="Download"
                          >
                            <Download className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
