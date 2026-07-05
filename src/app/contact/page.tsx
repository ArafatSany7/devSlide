import Link from "next/link";
import { Layers, ArrowLeft, Mail, Code, Globe, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Us - devSlide",
  description: "Get in touch with the creator of devSlide for support, feedback, or collaboration.",
};

export default function ContactPage() {
  return (
    <>
      <div className="fixed inset-0 z-0" style={{
        background: "#020617",
        backgroundImage: `linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)`,
        backgroundSize: "32px 32px, 32px 32px, 100% 100%",
      }} />
      
      <main className="relative z-10 min-h-screen flex items-center justify-center py-20 px-6">
        <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors" aria-label="Back to Home">
          <ArrowLeft className="w-5 h-5" aria-hidden="true" />
          <span>Back to Home</span>
        </Link>
        
        <article className="w-full max-w-4xl animate-fade-in-up">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/20">
              <Layers className="w-8 h-8 text-white" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">Have a question or want to collaborate? I'd love to hear from you.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <section className="glass-effect rounded-2xl p-8 border border-indigo-500/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-indigo-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Email Me</h3>
                    <p className="text-slate-400 mb-1">For support or any questions</p>
                    <a href="mailto:human.sany7@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">human.sany7@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-indigo-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Location</h3>
                    <p className="text-slate-400 mb-1">Serving students globally from</p>
                    <p className="text-indigo-400">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              <hr className="my-8 border-slate-700/50" />
              
              <h2 className="text-xl font-semibold text-white mb-4">Connect on Social</h2>
              <div className="flex gap-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass-effect hover:bg-indigo-500/10 border border-slate-700/50 hover:border-indigo-500/30 rounded-xl flex items-center justify-center transition-all text-slate-300 hover:text-indigo-400" aria-label="GitHub Profile">
                  <Code className="w-6 h-6" aria-hidden="true" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass-effect hover:bg-indigo-500/10 border border-slate-700/50 hover:border-indigo-500/30 rounded-xl flex items-center justify-center transition-all text-slate-300 hover:text-indigo-400" aria-label="LinkedIn Profile">
                  <Globe className="w-6 h-6" aria-hidden="true" />
                </a>
              </div>
            </section>

            <section className="glass-effect rounded-2xl p-8 border border-indigo-500/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Send a Message</h2>
              <ContactForm />
            </section>
          </div>
        </article>
      </main>
    </>
  );
}

