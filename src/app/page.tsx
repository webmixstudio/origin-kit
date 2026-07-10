import { LogoIcon, supportedLogoNames } from '@/icons';

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      {supportedLogoNames.map((name) => (
        <div
          key={name}
          className="flex flex-col items-center gap-2 rounded-lg border border-slate-200/80 bg-white/90 p-4 shadow-sm dark:border-slate-800/80 dark:bg-slate-950/70"
        >
          <LogoIcon name={name} className="h-8 w-8 text-slate-900 dark:text-slate-100" />
          <span className="text-sm text-slate-600 dark:text-slate-300">{name}</span>
        </div>
      ))}
      <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed border-slate-400/40 p-4 text-slate-500 dark:border-slate-600/50 dark:text-slate-400">
        <LogoIcon name="unknown-brand" className="h-8 w-8" />
        <span className="text-sm">fallback</span>
      </div>
    </div>
  );
}