"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Lock, Loader2, CheckCircle2 } from "lucide-react";

export default function AdminPanel() {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess(false);
    
    setTimeout(() => {
      setIsLoading(false);
      if (password === "2917") {
        setSuccess(true);
      } else {
        setError("Invalid admin credentials. Access denied.");
        setPassword("");
      }
    }, 1500);
  };

  return (
    <>
      <div className="fixed inset-0 z-0" style={{
        background: "#020617",
        backgroundImage: `linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)`,
        backgroundSize: "32px 32px, 32px 32px, 100% 100%",
      }} />
      
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center py-20 px-6">
        <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
        
        <div className="w-full max-w-md animate-fade-in-up">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700">
              <Lock className="w-8 h-8 text-slate-400" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Admin Portal</h1>
            <p className="text-slate-400">Restricted access for system administrators</p>
          </div>
          
          <div className="glass-effect rounded-2xl p-8 border border-red-500/20 shadow-[0_0_40px_rgba(239,68,68,0.05)]">
            {success ? (
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">Access Granted</h2>
                <p className="text-slate-400">Welcome Admin! The dashboard is currently under construction. Please check back later.</p>
              </div>
            ) : (
              <>
                {error && (
                  <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                    {error}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                      Admin Passkey
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all"
                      placeholder="••••••••••••••••"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading || !password}
                    className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-600 py-4 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <Lock className="w-4 h-4" />
                        <span>Authenticate</span>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
