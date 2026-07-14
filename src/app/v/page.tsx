"use client";

import React, { useState } from 'react';
import { 
  ArrowRight, Bot, Command, Cpu, GitBranch as Github , Globe, 
  Layers, Lock, Sparkles, Terminal, Zap, Shield, ChevronRight
} from 'lucide-react';

export default function OriginKitPremium() {
  const [copyStatus, setCopyStatus] = useState("npm run dev");

  return (
    <div className="min-h-screen">
      {/* 1. Subtle Engineering Grid */}
      <div className="fixed inset-0 bg-dot-grid -z-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-40" />

      {/* 2. Apple-Style Nav */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-foreground rounded-[4px] rotate-45" />
              <span className="font-bold tracking-tighter text-lg">Origin Kit</span>
            </div>
            <div className="hidden md:flex gap-8 text-[13px] font-medium text-foreground/50">
              <a href="#" className="hover:text-foreground transition-colors">Documentation</a>
              <a href="#" className="hover:text-foreground transition-colors">Manifesto</a>
              <a href="#" className="hover:text-foreground transition-colors">Architecture</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Github className="w-4 h-4 text-foreground/40 hover:text-foreground cursor-pointer" />
            <div className="h-4 w-px bg-border" />
            <button className="text-[13px] font-semibold bg-foreground text-background px-4 py-1.5 rounded-full shadow-sm hover:opacity-90 transition-all">
              Deploy
            </button>
          </div>
        </div>
      </nav>

      {/* 3. Hero Section: The "Manifesto" */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/50 text-[10px] font-bold uppercase tracking-[0.2em] mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Engineered for Enterprise AI
          </div>

          <h1 className="text-7xl md:text-9xl lg:text-[130px] mb-10">
            Build software, <br />
            <span className="text-foreground/30 italic">not boilerplate.</span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-foreground/60 leading-relaxed mb-16 font-medium">
            Origin Kit is the opinionated foundation for building modern AI products. 
            A complete ecosystem combining premium design, production architecture, and AI-native workflows.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-24 scale-110">
            <button className="h-12 px-8 bg-foreground text-background font-bold rounded-xl flex items-center gap-2 shadow-xl hover:-translate-y-0.5 transition-all active:scale-95">
              Start Building <ArrowRight className="w-4 h-4" />
            </button>
            <button className="h-12 px-8 bg-background border border-border font-bold rounded-xl flex items-center gap-2 hover:bg-muted transition-all">
              View Architecture
            </button>
          </div>

          {/* Interactive CLI Mockup */}
          <div className="w-full max-w-4xl relative">
            <div className="absolute inset-0 bg-foreground/5 blur-[100px] rounded-full -z-10" />
            <div className="rounded-2xl border border-border bg-background shadow-2xl overflow-hidden p-1">
              <div className="rounded-xl border border-border bg-muted/20 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  </div>
                  <div className="text-[11px] font-mono text-foreground/40 uppercase tracking-widest flex items-center gap-2">
                    <Terminal className="w-3 h-3" /> system_init.sh
                  </div>
                  <div className="w-10" />
                </div>
                <div className="p-8 text-left font-mono text-sm md:text-base bg-background/50 backdrop-blur-sm">
                  <div className="flex gap-4 group cursor-pointer" onClick={() => navigator.clipboard.writeText(copyStatus)}>
                    <span className="text-foreground/20 select-none">01</span>
                    <p className="text-foreground/80 flex items-center gap-2">
                      <span className="text-foreground/40">$</span> {copyStatus}
                      <Command className="w-3 h-3 text-foreground/20" />
                    </p>
                  </div>
                  <div className="flex gap-4 mt-2 animate-in fade-in slide-in-from-left-2 duration-1000 delay-500">
                    <span className="text-foreground/20 select-none">02</span>
                    <p className="text-emerald-500/80">› Injecting Next.js 16 + Tailwind 4...</p>
                  </div>
                  <div className="flex gap-4 animate-in fade-in slide-in-from-left-2 duration-1000 delay-700">
                    <span className="text-foreground/20 select-none">03</span>
                    <p className="text-emerald-500/80">› Booting Better Auth + PG Vector...</p>
                  </div>
                  <div className="flex gap-4 mt-4 animate-in zoom-in-95 duration-1000 delay-1000">
                    <span className="text-foreground/20 select-none">04</span>
                    <p className="text-foreground">Success. Launching localhost:3000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Technical Specifications Grid */}
      <section className="py-32 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-20">
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-foreground/40">Specifications</span>
              <h2 className="text-5xl md:text-6xl max-w-xl leading-[0.85]">Engineered to the <br/>highest standard.</h2>
            </div>
            <p className="max-w-xs text-sm text-foreground/50 hidden lg:block leading-relaxed">
              We've audited every dependency and architectural pattern to ensure compliance, safety, and speed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden shadow-sm">
            {[
              { icon: Shield, title: "Auth Guard", desc: "Native multi-tenant sessions with Better Auth and RBAC." },
              { icon: Cpu, title: "Model Orchestration", desc: "Streaming, tool-calling, and reasoning steps via AI SDK." },
              { icon: Zap, title: "Edge Performance", desc: "Sub-100ms global response times via Next.js Edge runtime." },
              { icon: Layers, title: "Design Tokens", desc: "Strict monochrome CSS variables for total brand control." },
              { icon: Lock, title: "Vector Isolation", desc: "PG Vector RAG pipelines with organizational tenant sharding." },
              { icon: Globe, title: "Enterprise Ready", desc: "Docker, CI/CD, and SOC2-ready patterns out of the box." }
            ].map((f, i) => (
              <div key={i} className="bg-background p-10 hover:bg-muted/30 transition-all group flex flex-col">
                <f.icon className="w-5 h-5 mb-8 text-foreground/30 group-hover:text-foreground transition-colors" />
                <h3 className="text-lg font-bold mb-3 tracking-tight">{f.title}</h3>
                <p className="text-foreground/50 text-[13px] leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Architecture Visual (Apple-style) */}
      <section className="py-32 bg-foreground text-background overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">System Architecture</span>
            <h2 className="text-6xl md:text-7xl leading-[0.85]">Infrastructure <br/>as Art.</h2>
            <div className="space-y-6">
              {[
                "Optimized Middleware for session decryption",
                "Schema-validated Server Action pipeline",
                "Optimistic UI with automatic revalidation",
                "Accessible Radix UI primitives"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity cursor-default">
                  <div className="w-1.5 h-1.5 rounded-full bg-background" />
                  <p className="text-sm font-semibold">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 p-8 flex flex-col justify-center gap-4 rotate-3 group-hover:rotate-0 transition-transform duration-700">
               <div className="h-12 w-full bg-white/10 rounded-xl border border-white/10 flex items-center px-4 justify-between">
                  <div className="h-2 w-24 bg-white/20 rounded" />
                  <ChevronRight className="w-4 h-4 opacity-20" />
               </div>
               <div className="h-40 w-full bg-white/5 rounded-xl border border-white/10 p-6">
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-white/10 rounded" />
                    <div className="h-2 w-5/6 bg-white/10 rounded" />
                    <div className="h-2 w-4/6 bg-white/10 rounded opacity-50" />
                  </div>
               </div>
               <div className="h-12 w-full bg-white rounded-xl flex items-center justify-center font-bold text-black text-xs uppercase tracking-widest">
                  Process Request
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Premium Footer */}
      <footer className="py-20 px-6">
        <div className="max-w-7xl mx-auto pt-20 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-foreground rounded-[4px] rotate-45" />
                <span className="font-bold tracking-tighter text-xl">Origin Kit</span>
              </div>
              <p className="max-w-xs text-sm text-foreground/40 leading-relaxed font-medium">
                The opinionated foundation for AI engineering. <br/> Built for performance, scaled for enterprise.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
              <div className="space-y-4">
                <h4 className="text-[11px] font-bold uppercase tracking-widest opacity-40">Resources</h4>
                <div className="flex flex-col gap-3 text-[13px] font-semibold text-foreground/60">
                   <a href="#" className="hover:text-foreground">Docs</a>
                   <a href="#" className="hover:text-foreground">GitHub</a>
                   <a href="#" className="hover:text-foreground">Changelog</a>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-[11px] font-bold uppercase tracking-widest opacity-40">Company</h4>
                <div className="flex flex-col gap-3 text-[13px] font-semibold text-foreground/60">
                   <a href="#" className="hover:text-foreground">About</a>
                   <a href="#" className="hover:text-foreground">Twitter</a>
                   <a href="#" className="hover:text-foreground">Privacy</a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
             <span className="text-[11px] font-mono opacity-30 uppercase tracking-[0.2em]">© 2025 Origin Kit Foundation. Released under MIT.</span>
             <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                   UPTIME 100%
                </div>
                <div className="text-[10px] font-bold opacity-30">V1.2.0-STABLE</div>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}