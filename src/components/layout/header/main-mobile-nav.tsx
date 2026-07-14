import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, ChevronDown, Box, Layout } from 'lucide-react';
import type { NavItem } from './nav-items';

export default function MainMobileNav({
  items,
  open,
  onClose,
}: {
  items: NavItem[];
  open: boolean;
  onClose: () => void;
}) {
  const [productsOpen, setProductsOpen] = useState(false);

  if (!open) {
    return null;
  }

  return (
    <div className="flex flex-col gap-1 w-full p-2">
      <div className="space-y-1">
        {/* Mobile Accordion Dropdown */}
        <div className="rounded-2xl transition-all duration-300 overflow-hidden">
          <button 
            onClick={() => setProductsOpen(!productsOpen)}
            className={`flex w-full items-center justify-between px-4 py-3.5 text-sm font-semibold transition-all hover:bg-black/5 active:scale-[0.98] dark:hover:bg-white/5 ${productsOpen ? 'text-black dark:text-white bg-black/5 dark:bg-white/5' : 'text-zinc-800 dark:text-zinc-200'}`}
          >
            <span>Products</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${productsOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="p-2 pt-1 pb-3 flex flex-col gap-1 border-l-2 border-black/5 dark:border-white/5 ml-4 mt-1">
              <Link href="#" onClick={onClose} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg"><Box className="w-4 h-4" /></div>
                <div className="text-[13px] font-bold text-black dark:text-white">Nexus UI</div>
              </Link>
              <Link href="#" onClick={onClose} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <div className="w-8 h-8 flex items-center justify-center bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-lg"><Layout className="w-4 h-4" /></div>
                <div className="text-[13px] font-bold text-black dark:text-white">Vertex Engine</div>
              </Link>
              <Link href="#" onClick={onClose} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <div className="w-8 h-8 flex items-center justify-center bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg"><Sparkles className="w-4 h-4" /></div>
                <div className="text-[13px] font-bold text-black dark:text-white">Horizon AI</div>
              </Link>
            </div>
          </div>
        </div>

        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold text-zinc-800 transition-all hover:bg-black/5 active:scale-[0.98] dark:text-zinc-200 dark:hover:bg-white/5"
          >
            <span>{item.label}</span>
            <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500">{item.description}</span>
          </Link>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-between rounded-2xl border border-black/5 bg-black/5 px-4 py-4 text-sm font-medium text-black dark:border-white/5 dark:bg-white/5 dark:text-white transition-all hover:bg-black/10 dark:hover:bg-white/10 active:scale-[0.98] cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black dark:bg-white text-white dark:text-black shadow-md">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[14px] font-bold">Deploy Project</div>
            <div className="text-[12px] font-medium text-black/50 dark:text-white/50">Premium starter setup</div>
          </div>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 dark:bg-white/10 transition-transform hover:translate-x-1">
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
