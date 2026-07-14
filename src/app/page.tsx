"use client";

import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Command, Layout, Database, Shield, 
  Cpu, Copy, Check, ChevronRight, Moon, Sun, 
  Terminal, Zap, Code2, Layers, Network, MoveRight,
  Globe, Box
} from 'lucide-react';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header/header';

export default function OriginKitPremium() {
  return (
    <div className="min-h-screen relative overflow-x-hidden font-sans transition-colors duration-700 dark:bg-[#000000] dark:text-white bg-[#FAFAFA] text-black">
      
      {/* GLOBAL STYLES & EFFECTS - Using CSS Dark Class Selectors */}
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
          background: radial-gradient(ellipse at top, rgba(0, 0, 0, 0.04) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }
        :root(.dark) .spotlight-top, html.dark .spotlight-top {
          background: radial-gradient(ellipse at top, rgba(255, 255, 255, 0.06) 0%, transparent 70%);
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
            linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
          transform: perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px);
          pointer-events: none;
          z-index: 0;
        }
        :root(.dark) .bg-grid-perspective, html.dark .bg-grid-perspective {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        }



        /* Gradient Borders for Depth */
        .bento-border {
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, transparent 100%);
        }
        :root(.dark) .bento-border, html.dark .bento-border {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, transparent 100%);
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
      <Header />

      {/* HERO SECTION */}
      <section className="relative pt-48 pb-20 px-6 flex flex-col items-center text-center z-10 overflow-hidden">
        <div className="bg-grid-perspective" />
        
        <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
          
          {/* Badge */}
          <div className="opacity-0 animate-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-[0.2em] mb-10 transition-colors backdrop-blur-md border-black/10 bg-black/5 text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-black dark:bg-white" />
            V2.0 Core Infrastructure Ready
          </div>

          {/* Headline */}
          <h1 className="opacity-0 animate-fade-up delay-100 text-[clamp(3.5rem,8vw,6.5rem)] font-bold tracking-tighter-plus leading-[1.05] mb-8">
            Ship Enterprise Apps. <br />
            <span className="text-zinc-400 dark:text-zinc-500">Without the Boilerplate.</span>
          </h1>

          {/* Subtitle */}
          <p className="opacity-0 animate-fade-up delay-200 max-w-2xl text-lg md:text-xl leading-relaxed mb-12 font-medium text-zinc-600 dark:text-zinc-400">
            Stop wrestling with configuration. OriginKit provides a high-performance Next.js foundation with production-ready architecture built right in. Focus purely on your product and deploy with absolute confidence.
          </p>

          {/* CTAs */}
          <div className="opacity-0 animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 mb-24 w-full justify-center">
            <button className="group h-14 px-10 font-bold rounded-full flex items-center justify-center gap-3 transition-all duration-300 active:scale-95 text-sm uppercase tracking-widest bg-black text-white hover:bg-zinc-800 shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)] dark:bg-white dark:text-black dark:hover:bg-zinc-200 dark:shadow-[0_10px_40px_rgba(255,255,255,0.15)] dark:hover:shadow-[0_15px_50px_rgba(255,255,255,0.25)]">
              Start Building Now <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* HERO SUB-IMAGE: MASSIVE ABSTRACT IDE/PIPELINE */}
          <div className="w-full max-w-6xl opacity-0 animate-fade-up delay-400 relative">
            {/* Ambient Glow behind the mockup */}
            <div className="absolute inset-0 blur-[120px] rounded-[40px] z-0 bg-black/10 dark:bg-white/10" />
            
            <div className="relative z-10 w-full rounded-[32px] p-[1px] bento-border shadow-2xl">
              <div className="w-full rounded-[32px] overflow-hidden bg-[#F5F5F5] dark:bg-[#050505]">
                
                {/* Mockup Header */}
                <div className="h-14 px-6 flex items-center justify-between border-b border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.02]">
                  <div className="flex gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    <div className="w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                    <div className="w-3 h-3 rounded-full bg-zinc-500 dark:bg-zinc-500" />
                  </div>
                  <div className="px-4 py-1.5 rounded-full border text-[10px] font-mono tracking-widest uppercase bg-black/5 border-black/10 text-zinc-500 dark:bg-white/5 dark:border-white/10 dark:text-zinc-4400">
                    system_architecture_view
                  </div>
                  <div className="w-16" />
                </div>

                {/* Mockup Body - Complex Grid Layout */}
                <div className="flex flex-col md:flex-row h-auto md:h-[500px]">
                  
                  {/* Left Panel - Code/Logs */}
                  <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r p-6 flex flex-col gap-4 border-black/10 bg-white/40 dark:border-white/10 dark:bg-black/40">
                    <div className="flex items-center gap-2 mb-2">
                      <Terminal size={14} className="text-zinc-400 dark:text-zinc-500" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Runtime Logs</span>
                    </div>
                    <div className="flex-1 rounded-xl border p-4 font-mono text-[10px] leading-relaxed overflow-hidden border-black/10 bg-black/5 text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
                      <div className="flex gap-2"><span className="text-zinc-400 dark:text-zinc-600">[14:02:01]</span> <span className="text-black dark:text-white">Booting Origin Edge Network...</span></div>
                      <div className="flex gap-2"><span className="text-zinc-400 dark:text-zinc-600">[14:02:02]</span> <span>Establishing Prisma PG Vector conn...</span></div>
                      <div className="flex gap-2"><span className="text-zinc-400 dark:text-zinc-600">[14:02:02]</span> <span className="text-black dark:text-white">Success. Latency: 12ms</span></div>
                      <div className="flex gap-2 mt-4"><span className="text-zinc-400 dark:text-zinc-600">[14:02:03]</span> <span>Deploying Better Auth Middleware</span></div>
                      <div className="flex gap-2"><span className="text-zinc-400 dark:text-zinc-600">[14:02:04]</span> <span className="text-black dark:text-white">Routes secured.</span></div>
                      <div className="flex gap-2 mt-4"><span className="text-zinc-400 dark:text-zinc-600">[14:02:05]</span> <span>Initializing Vercel AI SDK streams</span></div>
                      <div className="flex gap-2 animate-pulse mt-4">
                        <span className="text-black dark:text-white">&gt; Listening on port 3000_</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Panel - Visual Nodes */}
                  <div className="w-full md:w-2/3 p-8 relative flex flex-col justify-center items-center">
                    {/* Faint Background Grid inside the mockup */}
                    <div className="absolute inset-0 bg-grid-perspective opacity-50" />
                    
                    <div className="relative z-10 w-full max-w-md space-y-6">
                      {/* Node 1 */}
                      <div className="p-4 rounded-2xl border flex items-center justify-between backdrop-blur-md bg-white/60 border-black/20 dark:bg-black/60 dark:border-white/20">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center border bg-black/10 border-black/20 dark:bg-white/10 dark:border-white/20">
                            <Shield size={18} className="text-black dark:text-white" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-black dark:text-white">Auth Guard</div>
                            <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">middleware.ts</div>
                          </div>
                        </div>
                        <div className="px-2 py-1 rounded text-[9px] font-bold uppercase tracking-widest border border-black/20 text-black dark:border-white/20 dark:text-white">Secure</div>
                      </div>

                      {/* Connector line */}
                      <div className="h-8 w-px mx-auto bg-black/20 dark:bg-white/20" />

                      {/* Node 2 */}
                      <div className="p-4 rounded-2xl border flex items-center justify-between backdrop-blur-md bg-white/60 border-black/20 dark:bg-black/60 dark:border-white/20">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center border bg-black/10 border-black/20 dark:bg-white/10 dark:border-white/20">
                            <Database size={18} className="text-black dark:text-white" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-black dark:text-white">PG Vector RAG</div>
                            <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">schema.prisma</div>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <span className="w-1 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                          <span className="w-1 h-3 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                          <span className="w-1 h-3 rounded-full bg-black dark:bg-white" />
                        </div>
                      </div>

                      {/* Connector line */}
                      <div className="h-8 w-px mx-auto bg-black/20 dark:bg-white/20" />

                      {/* Node 3 */}
                      <div className="p-4 rounded-2xl border flex items-center justify-between backdrop-blur-md bg-black border-black dark:bg-white dark:border-white">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white dark:bg-black">
                            <Zap size={18} className="text-black dark:text-white" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white dark:text-black">Edge Response Stream</div>
                            <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">0.4s TTFB</div>
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
      <section className="py-12 border-y border-black/10 dark:border-white/10">
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
            <p className="text-lg max-w-2xl mx-auto text-zinc-500 dark:text-zinc-400">
              Every component is strictly engineered for scale, utilizing the most robust paradigms in the modern web ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            
            {/* Bento Card 1 - Large */}
            <div className="md:col-span-8 rounded-[32px] p-[1px] bento-border group relative overflow-hidden transition-all duration-500 hover:shadow-2xl">
              <div className="h-full w-full rounded-[32px] p-12 flex flex-col justify-between overflow-hidden relative bg-white dark:bg-[#0A0A0A]">
                 <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full blur-[100px] transition-all duration-700 group-hover:scale-110 bg-black/5 dark:bg-white/10" />
                 <div className="relative z-10">
                   <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-16 border bg-black/5 border-black/10 dark:bg-white/5 dark:border-white/10">
                     <Shield className="w-8 h-8 text-black dark:text-white" />
                   </div>
                   <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight-plus">Better Auth.<br/><span className="opacity-40 italic">Secure by Default.</span></h3>
                   <p className="max-w-md text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
                     Native multi-tenant support with Role-Based Access Control and organizational sharding. Fully typed sessions ready for enterprise compliance.
                   </p>
                 </div>
              </div>
            </div>

            {/* Bento Card 2 - Small */}
            <div className="md:col-span-4 rounded-[32px] p-[1px] bento-border group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
               <div className="h-full w-full rounded-[32px] p-10 flex flex-col justify-between bg-white dark:bg-[#0A0A0A]">
                 <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-10 border bg-black/5 border-black/10 dark:bg-white/5 dark:border-white/10">
                   <Cpu className="w-6 h-6 text-black dark:text-white" />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold mb-3 tracking-tight">Model Agnostic</h3>
                   <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                     Native Vercel AI SDK integration. Switch between OpenAI, Anthropic, or DeepSeek effortlessly.
                   </p>
                 </div>
               </div>
            </div>

            {/* Bento Card 3 - Small */}
            <div className="md:col-span-4 rounded-[32px] p-[1px] bento-border group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
               <div className="h-full w-full rounded-[32px] p-10 flex flex-col justify-between bg-white dark:bg-[#0A0A0A]">
                 <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-10 border bg-black/5 border-black/10 dark:bg-white/5 dark:border-white/10">
                   <Database className="w-6 h-6 text-black dark:text-white" />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold mb-3 tracking-tight">PG Vector RAG</h3>
                   <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                     Optimized retrieval pipelines using Prisma and PostgreSQL vector extensions for massive search workloads.
                   </p>
                 </div>
               </div>
            </div>

            {/* Bento Card 4 - Large Inverted */}
            <div className="md:col-span-8 rounded-[32px] p-[1px] group relative overflow-hidden transition-all duration-500 hover:shadow-2xl">
              <div className="h-full w-full rounded-[32px] p-12 flex flex-col justify-between relative bg-black text-white dark:bg-white dark:text-black">
                 <div className="flex justify-between items-start mb-16 relative z-10">
                   <div className="w-16 h-16 rounded-2xl flex items-center justify-center border bg-white/5 border-white/10 dark:bg-black/5 dark:border-black/10">
                     <Zap className="w-8 h-8 text-white dark:text-black" />
                   </div>
                   <div className="px-4 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-widest border-white/20 dark:border-black/20">
                     Performance
                   </div>
                 </div>
                 <div className="relative z-10">
                   <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight-plus">Edge Architecture.</h3>
                   <p className="max-w-lg text-lg leading-relaxed text-zinc-400 dark:text-zinc-600">
                     Built strictly on Next.js Server Actions and Edge Runtime. No client-side waterfall. Sub-100ms interaction latency by design.
                   </p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      <Footer/>

    </div>
  );
}