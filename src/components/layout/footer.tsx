
import {
  ArrowRight, Command, Disc,
} from 'lucide-react';

export default function OriginKitPremium() {


  return (
    <footer className="relative max-w-7xl mx-auto overflow-hidden pt-32 pb-12 px-6 border-t border-black/5 dark:border-white/5 bg-gradient-to-b from-transparent to-black/[0.02] dark:to-white/[0.02]">

      {/* Subtle Monochromatic SVG Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none opacity-[0.12] dark:opacity-[0.07] text-black dark:text-white w-full max-w-5xl overflow-hidden flex justify-center">
        <svg width="1260" height="457" viewBox="0 0 1260 457" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_11105_867)">
            <circle cx="630" cy="-173.299" r="230" fill="currentColor" />
          </g>
          <defs>
            <filter id="filter0_f_11105_867" x="0" y="-803.299" width="1260" height="1260" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_11105_867" />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-12 mb-24">

          {/* Column 1: Branding & Socials */}
          <div className="md:col-span-12 lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-6 group cursor-pointer w-max">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black text-white dark:bg-white dark:text-black transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                <Command size={16} />
              </div>
              <span className="font-bold text-xl tracking-tight uppercase text-black dark:text-white">Origin Kit</span>
            </div>
            <p className="text-sm leading-relaxed mb-8 text-zinc-600 dark:text-zinc-400 font-medium max-w-sm">
              The high-performance Next.js foundation for builders who demand architectural excellence. Skip the boilerplate, deploy with absolute confidence.
            </p>
            <div className="flex items-center gap-3 text-zinc-400 dark:text-zinc-500">
              {[Disc].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 hover:scale-105 hover:border-transparent bg-white/50 dark:bg-black/50 backdrop-blur-sm">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 & 3: Links (Grouped for better grid flow) */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-wrap sm:flex-nowrap gap-12 sm:gap-20">
            <div className="flex-1">
              <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-black dark:text-white">Platform</h4>
              <ul className="space-y-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {['Architecture', 'Edge Streaming', 'PG Vector RAG', 'Better Auth', 'Pricing'].map((link) => (
                  <li key={link}>
                    <a href="#" className="transition-all hover:text-black dark:hover:text-white hover:translate-x-1 inline-block">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-black dark:text-white">Resources</h4>
              <ul className="space-y-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {['Documentation', 'API Reference', 'Status', 'FAQ', 'Blog'].map((link) => (
                  <li key={link}>
                    <a href="#" className="transition-all hover:text-black dark:hover:text-white hover:translate-x-1 inline-block">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Newsletter (Inline Pill UI) */}
          <div className="md:col-span-12 lg:col-span-4">
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-6 text-black dark:text-white">Stay Updated</h4>
            <p className="text-sm font-medium mb-6 leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-sm lg:max-w-none">
              Subscribe for exclusive architectural insights, Next.js optimization tips, and platform updates.
            </p>
            <form className="w-full relative group" onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center w-full rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] p-1.5 transition-all duration-300 focus-within:ring-4 focus-within:ring-black/5 dark:focus-within:ring-white/10 focus-within:border-black/20 dark:focus-within:border-white/20 shadow-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-4 py-2 text-sm focus:outline-none text-black dark:text-white placeholder:text-zinc-400 font-medium"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-black text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-zinc-200 flex-shrink-0"
                >
                  Join <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-black/10 dark:border-white/10 text-[13px] font-medium text-zinc-500 dark:text-zinc-500">
          <div className="flex items-center gap-2">
            © {new Date().getFullYear()} Origin Kit. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}