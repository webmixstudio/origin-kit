"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { ModeToggle } from './mode-toggle';
import DesktopNav from './desktop-nav';
import MainMobileNav from './main-mobile-nav';
import { navItems } from './nav-items';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 transition-all duration-500 ${scrolled ? 'pt-2 md:pt-4' : 'pt-4 md:pt-8'}`}>
      <div className="w-[95%] max-w-5xl relative">
        <div className="bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-2xl border border-black/5 dark:border-white/10 rounded-full px-4 md:px-6 h-14 flex items-center justify-between shadow-sm hover:shadow-md transition-all duration-500">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2.5 group cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
              <div className="w-6 h-6 rounded-lg rotate-45 flex items-center justify-center transition-transform duration-700 group-hover:rotate-0 bg-black dark:bg-white shadow-sm">
                <div className="w-2 h-2 rounded-full bg-white dark:bg-black" />
              </div>
              <span className="font-bold tracking-tight text-lg text-black dark:text-white">Origin</span>
            </Link>
            
            <DesktopNav items={navItems} />
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:block">
              <ModeToggle/>
            </div>
            
            <div className="hidden md:block h-4 w-px bg-black/10 dark:bg-white/10" />
            
            <button className="hidden md:flex items-center gap-2 text-[13px] font-semibold px-5 py-2 rounded-full transition-all duration-300 active:scale-95 bg-black text-white hover:bg-zinc-800 hover:shadow-lg dark:bg-white dark:text-black dark:hover:bg-zinc-200">
              Deploy Project
            </button>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center gap-1.5">
              <ModeToggle/>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-black dark:text-white"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile dropdown menu - Absolute positioned below the header */}
        <div 
          className={`md:hidden absolute top-[calc(100%+12px)] left-0 right-0 transition-all duration-400 ease-out origin-top ${mobileMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto scale-100' : '-translate-y-4 opacity-0 pointer-events-none scale-95'}`}
        >
          <div className="bg-white/80 dark:bg-[#111]/80 backdrop-blur-3xl rounded-3xl p-3 shadow-2xl border border-black/10 dark:border-white/10">
            <MainMobileNav items={navItems} open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
          </div>
        </div>
      </div>
    </header>
  );
}
