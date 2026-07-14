"use client";

import React from 'react';
import {
  Shield, Cpu, Sparkles, Users
} from 'lucide-react';
import Header from '@/components/layout/header/header';
import Footer from '@/components/layout/footer';

export default function OriginKitAbout() {
  return (
    <div className="min-h-screen relative overflow-x-hidden font-sans transition-colors duration-700 dark:bg-[#000000] dark:text-white bg-[#FAFAFA] text-black">
      
      {/* GLOBAL STYLES & EFFECTS */}
      <style>{`
        .tracking-tighter-plus { letter-spacing: -0.04em; }
        .tracking-tight-plus { letter-spacing: -0.02em; }
        
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
        }

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
      `}</style>

      {/* BACKGROUND LAYERS */}
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 mix-blend-overlay" />
      <div className="spotlight-top" />

      {/* NAVIGATION */}
      <Header />

      {/* 1. Hero: The Mission Statement */}
      <section className="pt-48 pb-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-10 animate-fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-medium uppercase tracking-[0.2em] transition-colors backdrop-blur-md border-black/10 bg-black/5 text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
              Our Manifesto
            </span>
            <h1 className="text-6xl md:text-8xl leading-[0.9] font-medium tracking-tighter-plus">
              Setting the <br />
              <span className="text-zinc-400 dark:text-zinc-500">Standard for AI.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium max-w-2xl">
              We believe the next generation of world-changing software shouldn't be built on shaky foundations. Origin Kit exists to provide the bedrock for the AI era.
            </p>
          </div>
          
          <div className="flex-1 w-full relative animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="absolute inset-0 bg-black/5 dark:bg-white/10 blur-[80px] rounded-full" />
            <div className="relative aspect-square md:aspect-[4/3] rounded-[40px] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                alt="Cyber Architecture" 
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Values: The Pillars of Origin */}
      <section className="py-32 px-6 border-y border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
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
              <div key={i} className="bg-white dark:bg-[#0a0a0a] p-10 rounded-[32px] border border-black/5 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="w-14 h-14 bg-black/5 dark:bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                  <value.icon className="w-7 h-7 text-black dark:text-white" />
                </div>
                <h3 className="text-2xl font-medium tracking-tight mb-4">{value.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Narrative: The "Why" */}
      <section className="py-40 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-5 sticky top-40 space-y-8">
            <div className="aspect-[4/5] rounded-[32px] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl mb-12">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Team Engineering" 
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
            </div>
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight-plus leading-[0.9]">
              Engineered <br />for builders.
            </h2>
            <p className="text-xl text-zinc-500 dark:text-zinc-400">
              Origin Kit started as an internal infrastructure project. We were tired of rebuilding the same high-performance foundations for every AI venture.
            </p>
          </div>
          
          <div className="lg:col-span-7 space-y-24 pt-10">
            <div className="space-y-6 group">
              <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 flex items-center gap-4">
                <span className="w-8 h-px bg-zinc-300 dark:bg-zinc-700 group-hover:w-16 transition-all duration-500" /> 01. The Problem
              </h4>
              <p className="text-3xl md:text-4xl leading-tight font-medium tracking-tight">
                Startups are spending 40% of their early capital on "plumbing"—authentication, model orchestration, and data partitioning. This is a massive tax on innovation.
              </p>
            </div>
            <div className="space-y-6 group">
              <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 flex items-center gap-4">
                <span className="w-8 h-px bg-zinc-300 dark:bg-zinc-700 group-hover:w-16 transition-all duration-500" /> 02. The Solution
              </h4>
              <p className="text-3xl md:text-4xl leading-tight font-medium tracking-tight">
                We built a production-ready ecosystem that solves the plumbing problem forever. Origin Kit isn't a template; it's a living architecture that scales seamlessly with your company.
              </p>
            </div>
            <div className="space-y-6 group">
              <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 flex items-center gap-4">
                <span className="w-8 h-px bg-zinc-300 dark:bg-zinc-700 group-hover:w-16 transition-all duration-500" /> 03. The Vision
              </h4>
              <p className="text-3xl md:text-4xl leading-tight font-medium tracking-tight">
                Our goal is to be the default starting point for every AI-native company on the planet. From ambitious indie hackers to Fortune 50 engineering teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Community: Open Source Governance */}
      <section className="py-40 px-6 bg-black text-white dark:bg-white dark:text-black overflow-hidden relative z-10 rounded-[40px] mx-4 md:mx-6 my-10 shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000" 
          alt="Community Gathering" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay pointer-events-none"
        />
        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-white/10 dark:bg-black/10 rounded-3xl flex items-center justify-center mb-10 backdrop-blur-md border border-white/20 dark:border-black/20">
            <Users className="w-10 h-10" />
          </div>
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight-plus mb-10">
            Built by the <br />community.
          </h2>
          <p className="max-w-2xl text-xl opacity-80 mb-16 font-medium leading-relaxed">
            Origin Kit is and will always be Open Source. We are governed by the engineers who use it every day. No vendor lock-in. No proprietary secrets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="h-14 px-10 bg-white text-black dark:bg-black dark:text-white font-medium rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
              Join the Community
            </button>
            <button className="h-14 px-10 border border-white/20 dark:border-black/20 font-medium rounded-full hover:bg-white/10 dark:hover:bg-black/10 transition-colors duration-300">
              Read the Manifesto
            </button>
          </div>
        </div>
      </section>

      {/* 5. Metrics of Quality */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
            {[
              { label: "Stars", value: "12.4k+" },
              { label: "Contributors", value: "180+" },
              { label: "Production Apps", value: "2,500+" },
              { label: "Standard Rating", value: "A++" }
            ].map((stat, i) => (
              <div key={i} className="space-y-4">
                <span className="text-[11px] font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">{stat.label}</span>
                <p className="text-4xl md:text-5xl font-medium tracking-tighter-plus">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}