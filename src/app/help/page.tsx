import Link from "next/link";
import { ArrowLeft, BookOpen, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Help Center - devSlide",
};

export default function HelpCenter() {
  return (
    <>
      <div className="fixed inset-0 z-0" style={{
        background: "#020617",
        backgroundImage: `linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)`,
        backgroundSize: "32px 32px, 32px 32px, 100% 100%",
      }} />
      
      <main className="relative z-10 min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/20">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Help Center</h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">Find answers to common questions about using devSlide.</p>
          </div>
          
          <div className="space-y-6 animate-fade-in-up delay-100">
            <div className="glass-effect rounded-2xl p-8 border border-indigo-500/10 hover:border-indigo-500/30 transition-colors">
              <h2 className="text-xl font-semibold text-white mb-3">How do I create a collection?</h2>
              <p className="text-slate-400 leading-relaxed">
                Click on the "Create Collection" button on the home page. Enter a memorable name for your collection and set a secure password. You will instantly be taken to your dashboard, and you can share the collection ID and password with your students.
              </p>
            </div>
            
            <div className="glass-effect rounded-2xl p-8 border border-indigo-500/10 hover:border-indigo-500/30 transition-colors">
              <h2 className="text-xl font-semibold text-white mb-3">How do students submit presentations?</h2>
              <p className="text-slate-400 leading-relaxed">
                Students should go to the "Join Collection" page and enter the Collection ID and password you provided. Once authenticated, they will see an upload form where they can enter their name and upload their presentation file (PPTX, PDF, or Keynote).
              </p>
            </div>
            
            <div className="glass-effect rounded-2xl p-8 border border-indigo-500/10 hover:border-indigo-500/30 transition-colors">
              <h2 className="text-xl font-semibold text-white mb-3">How long do collections last?</h2>
              <p className="text-slate-400 leading-relaxed">
                To maintain a clutter-free environment and save storage space, all collections are designed to automatically expire and be deleted 24 hours after they are created. Be sure to download any student presentations before the collection expires.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center animate-fade-in-up delay-200">
            <p className="text-slate-400 mb-6">Still need help?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 btn-gradient px-8 py-4 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-indigo-500/30 transition-all">
              <MessageCircle className="w-5 h-5" />
              <span>Contact Support</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
