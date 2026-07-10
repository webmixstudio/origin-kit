import React, { forwardRef } from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

// ----------------------------------------------------------------------
// BRAND & SYSTEM LOGOS
// ----------------------------------------------------------------------

export const OriginLogoIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* 
        Reconstructed from origin-system.png 
        Flat Vector Design, Scalable, No Effects 
      */}
      <path d="M10.5 2H7L2 7V10.5H10.5V2Z" fill="currentColor" />
      <path d="M13.5 2H17L22 7V10.5H13.5V2Z" fill="currentColor" />
      <path d="M10.5 22H7L2 17V13.5H10.5V22Z" fill="currentColor" />
      <path d="M13.5 22H17L22 17V13.5H13.5V22Z" fill="currentColor" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  )
);
OriginLogoIcon.displayName = 'OriginLogoIcon';

// ----------------------------------------------------------------------
// AI MODEL LOGOS
// ----------------------------------------------------------------------

export const OpenAIIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.214-6.8118 6.0083 6.0083 0 0 0-8.561-1.4877 6.001 6.001 0 0 0-7.854 2.2573 5.9813 5.9813 0 0 0-.2154 6.8118 6.0094 6.0094 0 0 0 8.562 1.4878 6.0006 6.0006 0 0 0 7.854-2.2574h.4284Zm-8.4907-7.394a4.3415 4.3415 0 0 1 5.9187 1.2583l-5.698 3.2894-1.2584-2.1804 1.0377-2.3673Zm-9.1578 4.617a4.34 4.34 0 0 1 1.0335-5.9625l2.459 4.2592-3.4925 1.7033Zm-1.854 7.6402a4.3424 4.3424 0 0 1-1.034-5.9626l5.701 3.2913v2.8598l-4.667-.1885Zm5.1685 5.5682a4.3413 4.3413 0 0 1-5.9187-1.258l5.7003-3.2905 1.2568 2.1793-1.0384 2.3692Zm9.1576-4.617a4.34 4.34 0 0 1-1.033 5.9624l-2.4594-4.259 3.4924-1.7034Zm1.855-7.6413a4.3422 4.3422 0 0 1 1.033 5.9632l-5.701-3.2922v-2.8596l4.668.1886Z" />
      <path d="M11.9964 15.656a3.6607 3.6607 0 1 1 3.6608-3.6606 3.6653 3.6653 0 0 1-3.6608 3.6606Z" />
    </svg>
  )
);
OpenAIIcon.displayName = 'OpenAIIcon';

export const AnthropicIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M17.222 2.308L14.717 6.47h4.086l-1.581-4.162zM6.576 21.692l5.731-15.222H8.384l-4.81 15.222h3.002zM15.424 21.692H12.35l-1.89-6.305h-2.14l-1.006 3.197h8.11z" />
    </svg>
  )
);
AnthropicIcon.displayName = 'AnthropicIcon';

export const GeminiIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4772 12 22C12 16.4772 16.4772 12 22 12C16.4772 12 12 7.52285 12 2Z" />
    </svg>
  )
);
GeminiIcon.displayName = 'GeminiIcon';

export const GrokIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
);
GrokIcon.displayName = 'GrokIcon';

export const MidjourneyIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 42 42"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M7.13672 32.5664C7.95703 32.5664 9.1875 30.8438 10.623 30.5977C11.4434 30.5977 12.0586 32.3203 14.1094 32.5664C15.5449 32.5664 16.1602 30.8438 17.5957 30.8438C19.0312 30.8438 19.6465 32.5664 21.082 32.5664C22.5176 32.5664 23.1328 30.8438 24.5684 30.8438C26.0039 30.8438 26.6191 32.5664 28.0547 32.5664C29.4902 32.5664 30.1055 30.8438 31.541 30.8438C32.9766 30.8438 33.5918 32.5664 35.0273 32.5664"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.94219 30.852L9.00293 29.0555L33.2021 27.4969C31.299 29.2277 28.8545 30.6305 26.3813 31.7789"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6377 12.3211C22.7557 13.5803 28.5143 19.6629 30.4748 26.2008C29.4002 25.7783 28.5963 25.3477 27.0869 25.7332C25.6268 20.4217 23.0141 15.348 18.6377 12.3211Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9803 9.41309C16.2549 11.6689 23.49 17.9484 24.8189 26.3115C18.7363 23.8588 14.1057 25.1672 10.8818 27.1564C15.7996 20.9057 13.593 13.7977 10.9803 9.41309Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
MidjourneyIcon.displayName = 'MidjourneyIcon';

// ----------------------------------------------------------------------
// GENERATOR ICONS (Multi-Color Complex Assets)
// ----------------------------------------------------------------------

export const TextGeneratorIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 42, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 42 42"
      fill="none"
      className={className}
      {...props}
    >
      {/* ... [Your exact complex SVG paths for TextGenerator here] ... */}
      <circle cx="21" cy="21" r="16" fill="url(#text_paint0_radial)" />
      <path d="M14 21h14M21 14v14" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <radialGradient id="text_paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(21 21) scale(16)">
          <stop stopColor="#7F68FF" />
          <stop offset="1" stopColor="#BEB2FF" />
        </radialGradient>
      </defs>
    </svg>
  )
);
TextGeneratorIcon.displayName = 'TextGeneratorIcon';

// Add ImageGenerator, VideoGenerator, and CodeGenerator here following the exact same `forwardRef` wrapper pattern.