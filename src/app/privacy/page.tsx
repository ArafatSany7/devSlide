import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy - devSlide",
};

export default function PrivacyPolicy() {
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
          
          <div className="glass-effect rounded-3xl p-8 md:p-12 border border-indigo-500/20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
                <p className="text-slate-400 mt-1">Last updated: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
            
            <div className="space-y-8 text-slate-300 leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">1. Data Collection</h2>
                <p>
                  At devSlide, we take your privacy seriously. We only collect the minimal amount of data necessary to provide our presentation management service. This includes collection names, uploaded presentation files, and student names provided during upload.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">2. Data Security & Expiration</h2>
                <p>
                  All collections and uploaded presentations are stored securely. To ensure data privacy and minimize storage, all collections and their associated submissions are designed to be temporary. Please do not upload highly sensitive information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">3. Third-Party Services</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">4. Contact Us</h2>
                <p>
                  If you have any questions regarding this privacy policy, you may contact us via the Contact page.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
