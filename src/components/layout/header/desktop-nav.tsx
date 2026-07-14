import Link from 'next/link';
import { ChevronDown, Box, Layout, Sparkles } from 'lucide-react';
import type { NavItem } from './nav-items';

export default function DesktopNav({ items }: { items: NavItem[] }) {
  return (
    <div className="hidden md:flex items-center gap-1 p-1.5 bg-black/[0.03] dark:bg-white/[0.03] rounded-full border border-black/[0.05] dark:border-white/[0.05]">
      
      {/* Premium Hover Dropdown */}
      <div className="group relative">
        <button className="flex items-center gap-1 px-4 py-1.5 text-[13px] font-semibold tracking-wide text-zinc-600 transition-all duration-300 hover:text-black dark:text-zinc-400 dark:hover:text-white rounded-full hover:bg-black/5 dark:hover:bg-white/10">
          Products
          <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
        </button>
        
        {/* Dropdown Card */}
        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-400 translate-y-3 group-hover:translate-y-0">
          <div className="w-[300px] bg-white/80 dark:bg-[#111111]/80 backdrop-blur-3xl rounded-3xl p-2.5 shadow-2xl border border-black/5 dark:border-white/10 before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-[8px] before:border-transparent before:border-b-white/80 dark:before:border-b-[#111111]/80">
            <div className="flex flex-col gap-1">
              <Link href="#" className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200">
                <div className="flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 mt-0.5">
                  <Box className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[14px] font-bold text-black dark:text-white">Nexus UI</div>
                  <div className="text-[12px] font-medium text-zinc-500 dark:text-zinc-400 leading-snug mt-0.5">Production-ready building blocks</div>
                </div>
              </Link>
              <Link href="#" className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200">
                <div className="flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 mt-0.5">
                  <Layout className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[14px] font-bold text-black dark:text-white">Vertex Engine</div>
                  <div className="text-[12px] font-medium text-zinc-500 dark:text-zinc-400 leading-snug mt-0.5">Core rendering infrastructure</div>
                </div>
              </Link>
              <Link href="#" className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200">
                <div className="flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[14px] font-bold text-black dark:text-white">Horizon AI</div>
                  <div className="text-[12px] font-medium text-zinc-500 dark:text-zinc-400 leading-snug mt-0.5">Integrated machine learning</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="relative px-4 py-1.5 text-[13px] font-semibold tracking-wide text-zinc-600 transition-all duration-300 hover:text-black dark:text-zinc-400 dark:hover:text-white rounded-full hover:bg-black/5 dark:hover:bg-white/10"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
