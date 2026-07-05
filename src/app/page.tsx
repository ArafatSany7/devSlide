import Link from "next/link";
import { Layers, Menu, ArrowRight, Check, Zap, Shield, Eye, Clock, MessageCircle } from "lucide-react";
import { getCollectionStats } from "@/lib/actions";

export default async function Home() {
  const { activeCollections, totalSubmissions, recentCollections } = await getCollectionStats();

  return (
    <>
      <div
        className="fixed inset-0 z-0"
        aria-hidden="true"
        style={{
          background: "#020617",
          backgroundImage: `linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)`,
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
        }}
      />
      
      <main className="relative z-10">
        <div className="min-h-screen w-full relative">
          
          <header className="fixed top-0 inset-x-0 z-50 glass-effect border-b border-indigo-500/10">
            <nav className="max-w-7xl mx-auto px-6 lg:px-8" aria-label="Main Navigation">
              <div className="flex items-center justify-between h-20">
                <Link className="flex items-center gap-3 group" href="/" aria-label="devSlide Home">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg shadow-indigo-500/20">
                    <Layers className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="text-xl font-bold text-white">devSlide</span>
                </Link>
                <div className="hidden md:flex items-center gap-8">
                  <Link className="text-slate-300 hover:text-white font-medium transition-colors relative group" href="#features">
                    Features
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  <Link className="text-slate-300 hover:text-white font-medium transition-colors relative group" href="#collections">
                    Collections
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  <Link className="text-slate-300 hover:text-white font-medium transition-colors relative group" href="#contact">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  <Link className="btn-gradient px-8 py-4 rounded-xl font-semibold text-white hover:shadow-xl hover:shadow-indigo-500/30 transition-all text-base" href="/create">
                    Get Started
                  </Link>
                </div>
                <button className="md:hidden p-2 rounded-lg glass-effect hover:bg-slate-800/50 transition-colors" aria-label="Open Menu">
                  <Menu className="w-6 h-6 text-slate-300" aria-hidden="true" />
                </button>
              </div>
            </nav>
          </header>

          <article>
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero Section">
              <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px] animate-float" aria-hidden="true"></div>
              <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-float delay-300" style={{ animationDelay: "3s" }} aria-hidden="true"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" aria-hidden="true"></div>
              
              <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-effect border border-indigo-500/20 mb-8 animate-fade-in">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" aria-hidden="true"></div>
                  <span className="text-sm font-medium text-slate-300">Modern Presentation Management</span>
                </div>
                
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight animate-fade-in-up delay-100">
                  <span className="block text-white mb-2">Organize Your</span>
                  <span className="gradient-text">Slide Collections</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
                  Create secure, password-protected collections for class presentations.<br className="hidden sm:block" />
                  Simple submission management for students and instructors.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up delay-300">
                  <Link className="group btn-gradient px-8 py-4 rounded-xl font-semibold text-white hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 flex items-center gap-2 min-w-[200px] justify-center" href="/create">
                    Create Collection
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                  <Link className="group px-8 py-4 glass-effect rounded-xl font-semibold text-slate-200 hover:border-indigo-500/30 transition-all duration-300 border border-slate-700/50 min-w-[200px] hover:bg-slate-800/50" href="/join">
                    Join Collection
                  </Link>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in-up delay-400">
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-full glass-effect border border-slate-700/50">
                    <Check className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                    <span className="text-sm text-slate-300">No Registration</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-full glass-effect border border-slate-700/50">
                    <Zap className="w-4 h-4 text-amber-400" aria-hidden="true" />
                    <span className="text-sm text-slate-300">Instant Setup</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-full glass-effect border border-slate-700/50">
                    <Shield className="w-4 h-4 text-blue-400" aria-hidden="true" />
                    <span className="text-sm text-slate-300">Secure Access</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-32 relative" aria-label="Platform Statistics">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-20">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                    <span className="text-white">Platform </span>
                    <span className="gradient-text">Statistics</span>
                  </h2>
                  <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    Real-time insights into activity and growth
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-10">
                  <div className="glass-effect rounded-2xl p-8 border border-indigo-500/10 hover:border-indigo-500/30 transition-all text-center">
                    <div className="w-14 h-14 bg-indigo-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <Layers className="w-6 h-6 text-indigo-400" aria-hidden="true" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">{activeCollections}</div>
                    <div className="text-slate-400 font-medium">Active Collections</div>
                  </div>
                  <div className="glass-effect rounded-2xl p-8 border border-indigo-500/10 hover:border-indigo-500/30 transition-all text-center">
                    <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <Check className="w-6 h-6 text-purple-400" aria-hidden="true" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">{totalSubmissions}</div>
                    <div className="text-slate-400 font-medium">Total Submissions</div>
                  </div>
                  <div className="glass-effect rounded-2xl p-8 border border-indigo-500/10 hover:border-indigo-500/30 transition-all text-center">
                    <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <Clock className="w-6 h-6 text-emerald-400" aria-hidden="true" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">24h</div>
                    <div className="text-slate-400 font-medium">Auto-Deletion Cycle</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="features" className="py-32 relative" aria-labelledby="features-heading">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-20">
                  <h2 id="features-heading" className="text-4xl lg:text-5xl font-bold mb-6">
                    <span className="text-white">Why Choose </span>
                    <span className="gradient-text">devSlide</span>
                  </h2>
                  <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    Built for academic environments with simplicity at its core
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="glass-effect rounded-2xl p-8 border border-indigo-500/10 card-hover hover:border-indigo-500/30 text-center flex flex-col items-center justify-center min-h-[260px]">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-6">
                      <Zap className="w-8 h-8 text-indigo-400" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Quick Setup</h3>
                    <p className="text-slate-400 text-base leading-relaxed max-w-xs mx-auto">
                      Create slide collections in under 30 seconds with our intuitive interface
                    </p>
                  </div>
                  <div className="glass-effect rounded-2xl p-8 border border-indigo-500/10 card-hover hover:border-indigo-500/30 text-center flex flex-col items-center justify-center min-h-[260px]">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-6">
                      <Shield className="w-8 h-8 text-indigo-400" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">No Registration</h3>
                    <p className="text-slate-400 text-base leading-relaxed max-w-xs mx-auto">
                      Simple password-based access means no complex registration process
                    </p>
                  </div>
                  <div className="glass-effect rounded-2xl p-8 border border-indigo-500/10 card-hover hover:border-indigo-500/30 text-center flex flex-col items-center justify-center min-h-[260px]">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-6">
                      <Eye className="w-8 h-8 text-indigo-400" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Live Updates</h3>
                    <p className="text-slate-400 text-base leading-relaxed max-w-xs mx-auto">
                      See submissions as they come in with real-time updates and notifications
                    </p>
                  </div>
                  <div className="glass-effect rounded-2xl p-8 border border-indigo-500/10 card-hover hover:border-indigo-500/30 text-center flex flex-col items-center justify-center min-h-[260px]">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-6">
                      <Clock className="w-8 h-8 text-indigo-400" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Auto Cleanup</h3>
                    <p className="text-slate-400 text-base leading-relaxed max-w-xs mx-auto">
                      Collections automatically delete after 24 hours to keep things organized
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="collections" className="py-32 relative" aria-labelledby="collections-heading">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-20">
                  <h2 id="collections-heading" className="text-4xl lg:text-5xl font-bold mb-6">
                    <span className="gradient-text">Recent </span>
                    <span className="text-white">Collections</span>
                  </h2>
                  <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    Explore active collections across different classes
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {recentCollections.map((collection: any) => (
                    <div key={collection.id} className="glass-effect rounded-2xl p-6 border border-indigo-500/10 hover:border-indigo-500/30 transition-all group flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{collection.name}</h3>
                      <p className="text-slate-400 text-sm mb-6 flex-grow">
                        Created {new Date(collection.createdAt).toLocaleDateString()}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2 text-indigo-400 bg-indigo-500/10 px-3 py-1.5 rounded-lg text-sm font-medium">
                          <Layers className="w-4 h-4" aria-hidden="true" />
                          {collection._count.submissions} Submissions
                        </div>
                        <Link href="/join" className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-indigo-500 transition-colors" aria-label={`Join ${collection.name}`}>
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  ))}
                  {recentCollections.length === 0 && (
                    <div className="col-span-full text-center py-10">
                      <p className="text-slate-400">No active collections at the moment.</p>
                    </div>
                  )}
                </div>
              </div>
            </section>

            <section id="contact" className="py-32 relative" aria-labelledby="cta-heading">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[128px]" aria-hidden="true"></div>
              <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 id="cta-heading" className="text-5xl lg:text-6xl font-bold mb-6">
                    <span className="text-white">Ready to Get </span>
                    <span className="gradient-text">Started?</span>
                  </h2>
                  <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
                    Join thousands of students and instructors who have simplified their presentation workflow
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link className="group btn-gradient px-10 py-5 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-4 text-white min-w-[260px] text-lg" href="/create">
                      <span>Create Collection</span>
                      <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                    <Link className="group glass-effect border border-indigo-500/20 text-white px-10 py-5 rounded-2xl font-semibold hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all flex items-center justify-center gap-4 min-w-[260px] text-lg" href="/contact">
                      <MessageCircle className="w-6 h-6" aria-hidden="true" />
                      <span>Contact Support</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </article>

          <footer className="glass-effect border-t border-indigo-500/10 py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="lg:col-span-2">
                  <Link className="flex items-center gap-3 group" href="/" aria-label="devSlide Home">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Layers className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <span className="text-2xl font-bold gradient-text">devSlide</span>
                  </Link>
                  <p className="text-slate-400 mb-6 max-w-md mt-4 text-sm">
                    Streamlining presentation sharing for academic institutions worldwide.
                  </p>
                  <p className="text-xs text-slate-500">© 2025 devSlide. All rights reserved.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-5 text-white">Product</h3>
                  <ul className="space-y-3 text-sm">
                    <li><Link className="text-slate-400 hover:text-indigo-400 transition-colors" href="/create">Create Collection</Link></li>
                    <li><Link className="text-slate-400 hover:text-indigo-400 transition-colors" href="/join">Join Collection</Link></li>
                    <li><Link className="text-slate-400 hover:text-indigo-400 transition-colors" href="/join">Browse Collections</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-5 text-white">Support</h3>
                  <ul className="space-y-3 text-sm">
                    <li><Link className="text-slate-400 hover:text-indigo-400 transition-colors" href="/contact">Contact Us</Link></li>
                    <li><Link className="text-slate-400 hover:text-indigo-400 transition-colors" href="/help">Help Center</Link></li>
                    <li><Link className="text-slate-400 hover:text-indigo-400 transition-colors" href="/privacy">Privacy Policy</Link></li>
                    <li><Link className="text-slate-400 hover:text-indigo-400 transition-colors" href="/admin">Admin Panel</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}

