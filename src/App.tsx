import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Zap, Shield, Globe, Menu, X } from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="font-display font-bold text-xl tracking-tight text-slate-900">Nexus</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">Features</a>
              <a href="#testimonials" className="text-slate-600 hover:text-slate-900 transition-colors">Testimonials</a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
              <button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 active:scale-95">
                Get Started
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1 shadow-lg">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50">Features</a>
            <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50">Testimonials</a>
            <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50">Pricing</a>
            <div className="pt-2">
              <button className="w-full bg-slate-900 text-white px-5 py-3 rounded-xl font-medium">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
              Announcing Nexus 2.0
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-[1.1]"
            >
              Build faster with the ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">developer tool</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Nexus gives you the building blocks to create stunning, high-performance applications in record time. No compromise on quality.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group">
                Start building for free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all">
                View documentation
              </button>
            </motion.div>
            
            {/* Hero Image Mockup */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-20 relative mx-auto max-w-5xl"
            >
              <div className="rounded-2xl border border-slate-200/60 bg-white/50 backdrop-blur-sm p-2 shadow-2xl">
                <div className="rounded-xl overflow-hidden border border-slate-100 bg-slate-50 aspect-[16/9] flex items-center justify-center relative">
                  {/* Decorative mockup UI */}
                  <div className="absolute top-0 left-0 w-full h-12 bg-white border-b border-slate-200 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="pt-12 p-8 w-full h-full flex items-center justify-center">
                    <div className="w-full max-w-2xl space-y-4">
                      <div className="h-8 bg-slate-200 rounded-md w-1/3 animate-pulse"></div>
                      <div className="h-4 bg-slate-200 rounded-md w-3/4 animate-pulse"></div>
                      <div className="h-4 bg-slate-200 rounded-md w-5/6 animate-pulse"></div>
                      <div className="h-4 bg-slate-200 rounded-md w-2/3 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">Everything you need to scale</h2>
              <p className="text-lg text-slate-600">We've built a comprehensive suite of tools designed to help your team ship faster and maintain higher code quality.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-6 h-6 text-amber-500" />,
                  title: "Lightning Fast",
                  desc: "Built on modern architecture that ensures your applications load instantly and perform flawlessly."
                },
                {
                  icon: <Shield className="w-6 h-6 text-indigo-500" />,
                  title: "Enterprise Security",
                  desc: "Bank-grade encryption and security protocols come standard with every tier."
                },
                {
                  icon: <Globe className="w-6 h-6 text-emerald-500" />,
                  title: "Global Edge Network",
                  desc: "Deploy your app globally with a single click and serve users from the node closest to them."
                }
              ].map((feature, i) => (
                <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-24 bg-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-8 text-indigo-300">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-3xl md:text-4xl font-display font-medium leading-tight mb-8">
                "Nexus completely transformed our development workflow. We're shipping features 3x faster than we were last year, with fewer bugs."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-800 border-2 border-indigo-700 flex items-center justify-center text-lg font-bold">
                  SJ
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg">Sarah Jenkins</div>
                  <div className="text-indigo-300">CTO at TechFlow</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-50 rounded-3xl p-10 md:p-16 border border-slate-100 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-violet-100 rounded-full blur-3xl opacity-50"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Ready to get started?</h2>
                <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                  Join thousands of developers building the next generation of web applications. Get started for free today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all flex items-center justify-center shadow-lg shadow-indigo-200">
                    Create free account
                  </button>
                  <p className="text-sm text-slate-500 sm:hidden">No credit card required.</p>
                </div>
                <ul className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Free 14-day trial</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> No credit card required</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Cancel anytime</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="font-display font-bold text-xl tracking-tight text-white">Nexus</span>
              </div>
              <p className="text-sm">
                Empowering developers to build the future of the web, faster and better than ever before.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© {new Date().getFullYear()} Nexus Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
