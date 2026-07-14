"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme()

  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ease-out outline-none 
      bg-black/5 hover:bg-black/10 text-zinc-600 hover:text-black
      dark:bg-white/5 dark:hover:bg-white/10 dark:text-zinc-400 dark:hover:text-white"
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.1rem] w-[1.1rem] transition-all duration-500 scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.1rem] w-[1.1rem] transition-all duration-500 scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
    </button>
  )
}