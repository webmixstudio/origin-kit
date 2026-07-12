"use client";

import React from 'react';
import { 
  ArrowRight, Bot, ChevronRight, Code2, 
  Cpu, Globe, Layers, Shield, 
  Sparkles, Terminal, Zap, Fingerprint, 
  History, Heart, Users 
} from 'lucide-react';
import Link from 'next/link';

export default function OriginKitAbout() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background">
      {/* Engineering Grid Layer */}
      <div className="fixed inset-0 bg-dot-grid -z-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-40" />

      {/* Navigation (Consistent with Flagship) */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
        <div className="glass-surface rounded-full px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-5 h-5 bg-foreground rounded-[4px] rotate-45 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-background rounded-full" />
              </div>
              <span className="font-bold tracking-tighter text-lg">Origin Kit</span>
            </Link>
          </div>
          <div className="flex items-center gap-6 text-[13px] font-bold uppercase tracking-widest text-foreground/40">
             <a href="/docs" className="hover:text-foreground">Docs</a>
             <a href="https://github.com" className="hover:text-foreground">GitHub</a>
             <button className="bg-foreground text-background px-4 py-1.5 rounded-full text-[12px]">Get Started</button>
          </div>
        </div>
      </nav>

      {/* 1. Hero: The Mission Statement */}
      <section className="pt-64 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl space-y-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-foreground/40 animate-in fade-in duration-1000">
              Our Manifesto
            </span>
            <h1 className="text-7xl md:text-9xl lg:text-[130px] leading-[0.85] premium-gradient-text animate-in fade-in slide-in-from-bottom-8 duration-1000">
              Setting the <br />
              <span className="italic opacity-30">Standard for AI.</span>
            </h1>
            <p className="text-2xl md:text-4xl text-foreground/60 leading-tight font-medium animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
              We believe the next generation of world-changing software shouldn't be built on shaky foundations. Origin Kit exists to provide the bedrock for the AI era.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Values: The Pillars of Origin */}
      <section className="py-32 px-6 border-y border-border/50 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-20">
             {[
               {
                 icon: Shield,
                 title: "Integrity of Architecture",
                 desc: "We don't chase trends. We choose proven, enterprise-grade patterns that ensure your product remains maintainable for decades, not months."
               },
               {
                 icon: Cpu,
                 title: "Technical Sovereignty",
                 desc: "Ownership is everything. Our foundation is built to ensure you own your data, your models, and your infrastructure—end to end."
               },
               {
                 icon: Sparkles,
                 title: "Invisible Complexity",
                 desc: "The best engineering is felt, not seen. We handle the orchestration so you can focus strictly on the user experience."
               }
             ].map((value, i) => (
               <div key={i} className="space-y-6">
                  <div className="w-12 h-12 bg-foreground text-background rounded-2xl flex items-center justify-center shadow-2xl">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">{value.title}</h3>
                  <p className="text-foreground/50 font-medium leading-relaxed">{value.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. Narrative: The "Why" */}
      <section className="py-48 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-24 items-start">
           <div className="lg:col-span-5 sticky top-48 space-y-8">
              <h2 className="text-6xl leading-[0.85]">Engineered <br/>for builders.</h2>
              <p className="text-xl text-foreground/50">
                Origin Kit started as an internal infrastructure project. We were tired of rebuilding the same high-performance foundations for every AI venture.
              </p>
           </div>
           <div className="lg:col-span-7 space-y-32">
              <div className="space-y-6">
                 <h4 className="text-sm font-bold uppercase tracking-widest opacity-40">01. The Problem</h4>
                 <p className="text-3xl leading-snug font-medium">
                   Startups are spending 40% of their early capital on "plumbing"—authentication, model orchestration, and data partitioning. This is a tax on innovation.
                 </p>
              </div>
              <div className="space-y-6">
                 <h4 className="text-sm font-bold uppercase tracking-widest opacity-40">02. The Solution</h4>
                 <p className="text-3xl leading-snug font-medium">
                   We built a production-ready ecosystem that solves the "plumbing" problem forever. Origin Kit isn't a template; it's a living architecture that grows with your company.
                 </p>
              </div>
              <div className="space-y-6">
                 <h4 className="text-sm font-bold uppercase tracking-widest opacity-40">03. The Vision</h4>
                 <p className="text-3xl leading-snug font-medium">
                   Our goal is to be the default starting point for every AI-native company on the planet. From indie hackers to Fortune 50 teams.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* 4. Community: Open Source Governance */}
      <section className="py-32 px-6 bg-foreground text-background overflow-hidden relative">
         <div className="absolute inset-0 bg-dot-grid invert opacity-10" />
         <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
            <Users className="w-16 h-16 mb-12 opacity-40" />
            <h2 className="text-6xl md:text-8xl mb-12">Built by the <br/>community.</h2>
            <p className="max-w-2xl text-xl opacity-60 mb-16 font-medium">
              Origin Kit is and will always be Open Source. We are governed by the engineers who use it every day. No vendor lock-in. No proprietary secrets.
            </p>
            <div className="flex gap-4">
               <button className="h-14 px-10 bg-background text-foreground font-bold rounded-2xl flex items-center gap-2">
                 {/* <Github className="w-5 h-5" /> View Contributors */}
               </button>
               <button className="h-14 px-10 border border-background/20 text-background font-bold rounded-2xl">
                 Join Discord
               </button>
            </div>
         </div>
      </section>

      {/* 5. Metrics of Quality */}
      <section className="py-32 px-6 border-b border-border/50">
         <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12">
               {[
                 { label: "Stars", value: "12.4k+" },
                 { label: "Contributors", value: "180+" },
                 { label: "Production Apps", value: "2,500+" },
                 { label: "Standard Rating", value: "A++" }
               ].map((stat, i) => (
                 <div key={i} className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-widest opacity-40">{stat.label}</span>
                    <p className="text-5xl font-bold tracking-tighter">{stat.value}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Final Footer (Simplified for About) */}
      <footer className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
           <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-foreground rounded-[4px] rotate-45 flex items-center justify-center">
                <div className="w-2 h-2 bg-background rounded-full" />
              </div>
              <span className="font-bold tracking-tighter text-xl">Origin Kit</span>
           </div>
           <div className="flex gap-10 text-[13px] font-bold uppercase tracking-[0.2em] opacity-40">
              <Link href="/" className="hover:opacity-100">Home</Link>
              <a href="/docs" className="hover:opacity-100">Docs</a>
              <a href="/privacy" className="hover:opacity-100">Privacy</a>
           </div>
           <p className="text-[11px] font-mono opacity-30">© 2025 THE_ORIGIN_FOUNDATION</p>
        </div>
      </footer>
    </div>
  );
}