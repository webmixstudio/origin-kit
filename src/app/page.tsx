"use client";

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Command, Layout, Database, Shield, 
  Cpu, Copy, Check, ChevronRight, Moon, Sun, 
  Terminal, Zap, Code2, Layers, Network, MoveRight,
  Globe, Box
} from 'lucide-react';
import Footer from '@/components/layout/footer';

export default function OriginKitPremium() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyCmd = "npx origin-kit@latest init";
  const handleCopy = () => {
    navigator.clipboard.writeText(copyCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen relative overflow-x-hidden font-sans transition-colors duration-700 ${isDark ? 'bg-[#000000] text-white' : 'bg-[#FAFAFA] text-black'}`}>
      
      {/* GLOBAL STYLES & EFFECTS */}
      <style>{`
        .tracking-tighter-plus { letter-spacing: -0.04em; }
        .tracking-tight-plus { letter-spacing: -0.02em; }
        
        /* Ambient Noise */
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
        }

        /* Top Spotlight */
        .spotlight-top {
          position: absolute;
          top: -20vh;
          left: 50%;
          transform: translateX(-50%);
          width: 150vw;
          height: 100vh;
          background: radial-gradient(ellipse at top, ${isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)'} 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        /* Perspective Grid Background */
        .bg-grid-perspective {
          position: absolute;
          width: 200vw;
          height: 100vh;
          left: -50vw;
          top: 0;
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, ${isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'} 1px, transparent 1px),
            linear-gradient(to bottom, ${isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'} 1px, transparent 1px);
          transform: perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px);
          pointer-events: none;
          z-index: 0;
        }

        /* Glass Nav */
        .glass-nav {
          background: ${isDark ? 'rgba(0, 0, 0, 0.6)' : 'rgba(250, 250, 250, 0.6)'};
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
        }

        /* Gradient Borders for Depth */
        .bento-border {
          background: linear-gradient(180deg, ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'} 0%, transparent 100%);
        }

        /* Animations */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-fade-up { animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
      `}</style>

      {/* BACKGROUND LAYERS */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 mix-blend-overlay" />
      <div className="spotlight-top" />

      {/* NAVIGATION: FLOATING ISLAND */}
      <nav className={`fixed left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-700 ${scrolled ? 'top-4' : 'top-8'}`}>
        <div className="glass-nav rounded-full px-6 h-14 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2.5 group cursor-pointer">
              <div className={`w-6 h-6 rounded-[6px] rotate-45 flex items-center justify-center transition-transform duration-700 group-hover:rotate-0 ${isDark ? 'bg-white' : 'bg-black'}`}>
                <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-black' : 'bg-white'}`} />
              </div>
              <span className="font-bold tracking-tighter text-lg uppercase">Origin</span>
            </div>
            
            <div className={`hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] ${isDark ? 'text-white/50' : 'text-black/50'}`}>
              <a href="#platform" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Platform</a>
              <a href="#architecture" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Architecture</a>
              <a href="#docs" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Docs</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className={`p-2 transition-colors ${isDark ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'}`}
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <div className={`h-4 w-px ${isDark ? 'bg-white/20' : 'bg-black/20'}`} />
            <button className={`text-[12px] font-bold px-5 py-2 rounded-full transition-all active:scale-95 ${
              isDark ? 'bg-white text-black hover:bg-zinc-200' : 'bg-black text-white hover:bg-zinc-800'
            }`}>
              Deploy <span className="hidden sm:inline">Project</span>
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-48 pb-20 px-6 flex flex-col items-center text-center z-10 overflow-hidden">
        <div className="bg-grid-perspective" />
        
        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
          
          {/* Badge */}
          <div className={`opacity-0 animate-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-[0.2em] mb-10 transition-colors backdrop-blur-md ${
            isDark ? 'border-white/10 bg-white/5 text-zinc-300' : 'border-black/10 bg-black/5 text-zinc-600'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isDark ? 'bg-white' : 'bg-black'}`} />
            V2.0 Core Infrastructure Ready
          </div>

          {/* Headline */}
          <h1 className="opacity-0 animate-fade-up delay-100 text-[clamp(3.5rem,10vw,8.5rem)] font-bold tracking-tighter-plus leading-[0.9] mb-10">
            Architect the <br />
            <span className={isDark ? 'text-zinc-600 italic' : 'text-zinc-400 italic'}>Future.</span>
          </h1>

          {/* Subtitle */}
          <p className={`opacity-0 animate-fade-up delay-200 max-w-2xl text-lg md:text-2xl leading-relaxed mb-16 font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
            The high-performance Next.js foundation for builders who demand architectural excellence. Skip the boilerplate, deploy with confidence.
          </p>

          {/* CTAs */}
          <div className="opacity-0 animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 mb-24 w-full justify-center">
            <button className={`h-14 px-10 font-bold rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 text-sm uppercase tracking-wider ${
              isDark ? 'bg-white text-black hover:bg-zinc-200 shadow-[0_0_40px_rgba(255,255,255,0.15)]' : 'bg-black text-white hover:bg-zinc-800 shadow-[0_0_40px_rgba(0,0,0,0.15)]'
            }`}>
              Initialize Workspace <MoveRight className="w-4 h-4" />
            </button>
            <button 
              onClick={handleCopy}
              className={`h-14 px-8 font-mono text-[13px] rounded-2xl flex items-center justify-center gap-3 transition-all backdrop-blur-md border ${
                isDark ? 'border-white/10 bg-white/5 hover:bg-white/10 text-zinc-300' : 'border-black/10 bg-black/5 hover:bg-black/10 text-zinc-700'
              }`}
            >
              <span className="opacity-30">$</span> {copied ? 'Copied to clipboard' : copyCmd}
              {copied ? <Check size={14} className={isDark ? 'text-white' : 'text-black'} /> : <Copy size={14} className="opacity-30" />}
            </button>
          </div>

          {/* HERO SUB-IMAGE: MASSIVE ABSTRACT IDE/PIPELINE */}
          <div className="w-full max-w-6xl opacity-0 animate-fade-up delay-400 relative">
            {/* Ambient Glow behind the mockup */}
            <div className={`absolute inset-0 blur-[120px] rounded-[40px] z-0 ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
            
            <div className={`relative z-10 w-full rounded-[32px] p-[1px] bento-border shadow-2xl`}>
              <div className={`w-full rounded-[32px] overflow-hidden ${isDark ? 'bg-[#050505]' : 'bg-[#F5F5F5]'}`}>
                
                {/* Mockup Header */}
                <div className={`h-14 px-6 flex items-center justify-between border-b ${isDark ? 'border-white/10 bg-white/[0.02]' : 'border-black/10 bg-black/[0.02]'}`}>
                  <div className="flex gap-2.5">
                    <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-zinc-700' : 'bg-zinc-300'}`} />
                    <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-zinc-600' : 'bg-zinc-400'}`} />
                    <div className={`w-3 h-3 rounded-full ${isDark ? 'bg-zinc-500' : 'bg-zinc-500'}`} />
                  </div>
                  <div className={`px-4 py-1.5 rounded-full border text-[10px] font-mono tracking-widest uppercase ${
                    isDark ? 'bg-white/5 border-white/10 text-zinc-400' : 'bg-black/5 border-black/10 text-zinc-500'
                  }`}>
                    system_architecture_view
                  </div>
                  <div className="w-16" />
                </div>

                {/* Mockup Body - Complex Grid Layout */}
                <div className="flex flex-col md:flex-row h-auto md:h-[500px]">
                  
                  {/* Left Panel - Code/Logs */}
                  <div className={`w-full md:w-1/3 border-b md:border-b-0 md:border-r p-6 flex flex-col gap-4 ${
                    isDark ? 'border-white/10 bg-black/40' : 'border-black/10 bg-white/40'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      <Terminal size={14} className={isDark ? 'text-zinc-500' : 'text-zinc-400'} />
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>Runtime Logs</span>
                    </div>
                    <div className={`flex-1 rounded-xl border p-4 font-mono text-[10px] leading-relaxed overflow-hidden ${
                      isDark ? 'border-white/10 bg-white/5 text-zinc-400' : 'border-black/10 bg-black/5 text-zinc-600'
                    }`}>
                      <div className="flex gap-2"><span className={isDark ? 'text-zinc-600' : 'text-zinc-400'}>[14:02:01]</span> <span className={isDark ? 'text-white' : 'text-black'}>Booting Origin Edge Network...</span></div>
                      <div className="flex gap-2"><span className={isDark ? 'text-zinc-600' : 'text-zinc-400'}>[14:02:02]</span> <span>Establishing Prisma PG Vector conn...</span></div>
                      <div className="flex gap-2"><span className={isDark ? 'text-zinc-600' : 'text-zinc-400'}>[14:02:02]</span> <span className={isDark ? 'text-white' : 'text-black'}>Success. Latency: 12ms</span></div>
                      <div className="flex gap-2 mt-4"><span className={isDark ? 'text-zinc-600' : 'text-zinc-400'}>[14:02:03]</span> <span>Deploying Better Auth Middleware</span></div>
                      <div className="flex gap-2"><span className={isDark ? 'text-zinc-600' : 'text-zinc-400'}>[14:02:04]</span> <span className={isDark ? 'text-white' : 'text-black'}>Routes secured.</span></div>
                      <div className="flex gap-2 mt-4"><span className={isDark ? 'text-zinc-600' : 'text-zinc-400'}>[14:02:05]</span> <span>Initializing Vercel AI SDK streams</span></div>
                      <div className="flex gap-2 animate-pulse mt-4">
                        <span className={isDark ? 'text-white' : 'text-black'}>&gt; Listening on port 3000_</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Panel - Visual Nodes */}
                  <div className="w-full md:w-2/3 p-8 relative flex flex-col justify-center items-center">
                    {/* Faint Background Grid inside the mockup */}
                    <div className="absolute inset-0 bg-grid-perspective opacity-50" />
                    
                    <div className="relative z-10 w-full max-w-md space-y-6">
                      {/* Node 1 */}
                      <div className={`p-4 rounded-2xl border flex items-center justify-between backdrop-blur-md ${
                        isDark ? 'bg-black/60 border-white/20' : 'bg-white/60 border-black/20'
                      }`}>
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${isDark ? 'bg-white/10 border-white/20' : 'bg-black/10 border-black/20'}`}>
                            <Shield size={18} className={isDark ? 'text-white' : 'text-black'} />
                          </div>
                          <div>
                            <div className={`text-xs font-bold ${isDark ? 'text-white' : 'text-black'}`}>Auth Guard</div>
                            <div className={`text-[10px] font-mono ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>middleware.ts</div>
                          </div>
                        </div>
                        <div className={`px-2 py-1 rounded text-[9px] font-bold uppercase tracking-widest border ${isDark ? 'border-white/20 text-white' : 'border-black/20 text-black'}`}>Secure</div>
                      </div>

                      {/* Connector line */}
                      <div className={`h-8 w-px mx-auto ${isDark ? 'bg-white/20' : 'bg-black/20'}`} />

                      {/* Node 2 */}
                      <div className={`p-4 rounded-2xl border flex items-center justify-between backdrop-blur-md ${
                        isDark ? 'bg-black/60 border-white/20' : 'bg-white/60 border-black/20'
                      }`}>
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${isDark ? 'bg-white/10 border-white/20' : 'bg-black/10 border-black/20'}`}>
                            <Database size={18} className={isDark ? 'text-white' : 'text-black'} />
                          </div>
                          <div>
                            <div className={`text-xs font-bold ${isDark ? 'text-white' : 'text-black'}`}>PG Vector RAG</div>
                            <div className={`text-[10px] font-mono ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>schema.prisma</div>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <span className={`w-1 h-3 rounded-full ${isDark ? 'bg-zinc-700' : 'bg-zinc-300'}`} />
                          <span className={`w-1 h-3 rounded-full ${isDark ? 'bg-zinc-500' : 'bg-zinc-400'}`} />
                          <span className={`w-1 h-3 rounded-full ${isDark ? 'bg-white' : 'bg-black'}`} />
                        </div>
                      </div>

                      {/* Connector line */}
                      <div className={`h-8 w-px mx-auto ${isDark ? 'bg-white/20' : 'bg-black/20'}`} />

                      {/* Node 3 */}
                      <div className={`p-4 rounded-2xl border flex items-center justify-between backdrop-blur-md ${
                        isDark ? 'bg-white border-white' : 'bg-black border-black'
                      }`}>
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark ? 'bg-black' : 'bg-white'}`}>
                            <Zap size={18} className={isDark ? 'text-white' : 'text-black'} />
                          </div>
                          <div>
                            <div className={`text-xs font-bold ${isDark ? 'text-black' : 'text-white'}`}>Edge Response Stream</div>
                            <div className={`text-[10px] font-mono ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>0.4s TTFB</div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE STATS LOGO TICKER */}
      <section className={`py-12 border-y ${isDark ? 'border-white/10' : 'border-black/10'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-40 grayscale contrast-125">
             {["VERCEL", "NEXT.JS", "ANTHROPIC", "PRISMA", "TAILWIND", "STRIPE"].map(brand => (
               <span key={brand} className="text-xl md:text-2xl font-bold tracking-tighter">{brand}</span>
             ))}
          </div>
        </div>
      </section>

      {/* DEEP BENTO GRID: ARCHITECTURAL PILLARS */}
      <section id="platform" className="py-40 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight-plus mb-6">
              Architectural Pillars
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Every component is strictly engineered for scale, utilizing the most robust paradigms in the modern web ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            
            {/* Bento Card 1 - Large */}
            <div className="md:col-span-8 rounded-[32px] p-[1px] bento-border group relative overflow-hidden transition-all duration-500 hover:shadow-2xl">
              <div className={`h-full w-full rounded-[32px] p-12 flex flex-col justify-between overflow-hidden relative ${isDark ? 'bg-[#0A0A0A]' : 'bg-white'}`}>
                 <div className={`absolute -right-20 -top-20 w-96 h-96 rounded-full blur-[100px] transition-all duration-700 group-hover:scale-110 ${isDark ? 'bg-white/10' : 'bg-black/5'}`} />
                 <div className="relative z-10">
                   <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-16 border ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
                     <Shield className={`w-8 h-8 ${isDark ? 'text-white' : 'text-black'}`} />
                   </div>
                   <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight-plus">Better Auth.<br/><span className="opacity-40 italic">Secure by Default.</span></h3>
                   <p className={`max-w-md text-lg leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                     Native multi-tenant support with Role-Based Access Control and organizational sharding. Fully typed sessions ready for enterprise compliance.
                   </p>
                 </div>
              </div>
            </div>

            {/* Bento Card 2 - Small */}
            <div className="md:col-span-4 rounded-[32px] p-[1px] bento-border group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
               <div className={`h-full w-full rounded-[32px] p-10 flex flex-col justify-between ${isDark ? 'bg-[#0A0A0A]' : 'bg-white'}`}>
                 <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 border ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
                   <Cpu className={`w-6 h-6 ${isDark ? 'text-white' : 'text-black'}`} />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold mb-3 tracking-tight">Model Agnostic</h3>
                   <p className={`text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                     Native Vercel AI SDK integration. Switch between OpenAI, Anthropic, or DeepSeek effortlessly.
                   </p>
                 </div>
               </div>
            </div>

            {/* Bento Card 3 - Small */}
            <div className="md:col-span-4 rounded-[32px] p-[1px] bento-border group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
               <div className={`h-full w-full rounded-[32px] p-10 flex flex-col justify-between ${isDark ? 'bg-[#0A0A0A]' : 'bg-white'}`}>
                 <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 border ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
                   <Database className={`w-6 h-6 ${isDark ? 'text-white' : 'text-black'}`} />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold mb-3 tracking-tight">PG Vector RAG</h3>
                   <p className={`text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                     Optimized retrieval pipelines using Prisma and PostgreSQL vector extensions for massive search workloads.
                   </p>
                 </div>
               </div>
            </div>

            {/* Bento Card 4 - Large Inverted */}
            <div className="md:col-span-8 rounded-[32px] p-[1px] group relative overflow-hidden transition-all duration-500 hover:shadow-2xl">
              <div className={`h-full w-full rounded-[32px] p-12 flex flex-col justify-between relative ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
                 <div className="flex justify-between items-start mb-16 relative z-10">
                   <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border ${isDark ? 'bg-black/5 border-black/10' : 'bg-white/5 border-white/10'}`}>
                     <Zap className={`w-8 h-8 ${isDark ? 'text-black' : 'text-white'}`} />
                   </div>
                   <div className={`px-4 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-widest ${isDark ? 'border-black/20' : 'border-white/20'}`}>
                     Performance
                   </div>
                 </div>
                 <div className="relative z-10">
                   <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight-plus">Edge Architecture.</h3>
                   <p className={`max-w-lg text-lg leading-relaxed ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>
                     Built strictly on Next.js Server Actions and Edge Runtime. No client-side waterfall. Sub-100ms interaction latency by design.
                   </p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PERFECTED FOOTER */}
      <footer className={`pt-32 pb-12 px-6 border-t relative overflow-hidden ${isDark ? 'border-white/10 bg-[#000000]' : 'border-black/10 bg-[#FAFAFA]'}`}>
        
        {/* Massive Background Text */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full overflow-hidden flex justify-center pointer-events-none select-none z-0">
          <h2 className={`text-[18vw] font-bold tracking-tighter leading-none m-0 p-0 ${isDark ? 'text-white/[0.02]' : 'text-black/[0.02]'}`}>
            ORIGIN
          </h2>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 mb-24">
            
            {/* Branding Column */}
            <div className="col-span-2 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
                  <Command size={16} />
                </div>
                <span className="font-bold text-lg tracking-wide uppercase">Origin Kit</span>
              </div>
              <p className={`text-sm max-w-sm leading-relaxed font-medium mb-8 ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                The strict monochrome, production-ready foundation for enterprise applications. Ship faster without compromising on architectural integrity.
              </p>
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-widest ${
                isDark ? 'border-white/20 bg-white/5 text-white' : 'border-black/20 bg-black/5 text-black'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isDark ? 'bg-white' : 'bg-black'}`} />
                All Systems Operational
              </div>
            </div>
            
            {/* Links Column 1 */}
            <div className="col-span-1">
              <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Platform</h4>
              <ul className={`space-y-4 text-sm font-semibold ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                <li><a href="#" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Architecture</a></li>
                <li><a href="#" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Components</a></li>
                <li><a href="#" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Pricing</a></li>
                <li><a href="#" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Showcase</a></li>
              </ul>
            </div>
            
            {/* Links Column 2 */}
            <div className="col-span-1">
              <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Resources</h4>
              <ul className={`space-y-4 text-sm font-semibold ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                <li><a href="#" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Documentation</a></li>
                <li><a href="#" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>GitHub</a></li>
                <li><a href="#" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Changelog</a></li>
                <li><a href="#" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Discord</a></li>
              </ul>
            </div>

            {/* Links Column 3 */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold text-xs uppercase tracking-widest mb-6">Legal</h4>
              <ul className={`space-y-4 text-sm font-semibold ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                <li><a href="#" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Privacy Policy</a></li>
                <li><a href="#" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>Terms of Service</a></li>
                <li><a href="#" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-black'}`}>License (MIT)</a></li>
              </ul>
            </div>

          </div>
          
          {/* Bottom Bar */}
          <div className={`flex flex-col md:flex-row justify-between items-center text-[11px] font-bold uppercase tracking-widest pt-8 border-t ${
            isDark ? 'border-white/10 text-zinc-600' : 'border-black/10 text-zinc-400'
          }`}>
            <span>© {new Date().getFullYear()} Origin Foundation. All rights reserved.</span>
            <span className="mt-4 md:mt-0 flex gap-6">
              <a href="#" className={isDark ? 'hover:text-white transition-colors' : 'hover:text-black transition-colors'}>Twitter (X)</a>
              <a href="#" className={isDark ? 'hover:text-white transition-colors' : 'hover:text-black transition-colors'}>LinkedIn</a>
            </span>
          </div>
        </div>
      </footer>
      <Footer/>

    </div>
  );
}