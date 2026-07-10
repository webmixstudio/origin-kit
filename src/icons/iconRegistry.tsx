import React, { forwardRef } from 'react';
import {
  AnthropicIcon,
  GeminiIcon,
  GrokIcon,
  IconProps,
  OpenAIIcon,
  OriginLogoIcon,
  MidjourneyIcon,
} from './icons';

export type AIModelName =
  | 'gpt'
  | 'gpt-3.5'
  | 'gpt-4'
  | 'gpt-4o'
  | 'openai'
  | 'claude'
  | 'claude-3'
  | 'anthropic'
  | 'gemini'
  | 'gemini-pro'
  | 'google'
  | 'grok'
  | 'xai'
  | 'midjourney'
  | 'origin'
  | (string & {});

export interface LogoIconProps extends IconProps {
  /** The normalized model or brand key used to resolve the icon. */
  name?: AIModelName;
  /** Optional fallback icon used when the lookup misses. Accepts forwardRef components. */
  fallbackIcon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
}

// 2. Create an O(1) lookup map.
// This is significantly faster and cleaner than a giant switch statement.
const iconRegistry: Record<string, React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>> = {
  // OpenAI
  'gpt': OpenAIIcon,
  'gpt-3.5': OpenAIIcon,
  'gpt-4': OpenAIIcon,
  'gpt-4o': OpenAIIcon,
  'openai': OpenAIIcon,
  
  // Anthropic
  'claude': AnthropicIcon,
  'claude-3': AnthropicIcon,
  'anthropic': AnthropicIcon,
  
  // Google
  'gemini': GeminiIcon,
  'gemini-pro': GeminiIcon,
  'google': GeminiIcon,
  
  // xAI
  'grok': GrokIcon,
  'xai': GrokIcon,
  
  // Others
  'midjourney': MidjourneyIcon,
  'origin': OriginLogoIcon,
};

const aliasRegistry: Record<string, string> = {
  'gpt4': 'gpt-4',
  'gpt4o': 'gpt-4o',
  'gpt 4': 'gpt-4',
  'gpt 4o': 'gpt-4o',
  'open ai': 'openai',
  'claude 3': 'claude-3',
  'gemini pro': 'gemini-pro',
  'x ai': 'xai',
  'mid journey': 'midjourney',
};

const normalizeModelName = (name?: string) => {
  if (!name) {
    return 'origin';
  }

  const normalized = name.toLowerCase().trim().replace(/\s+/g, ' ');
  return aliasRegistry[normalized] ?? normalized;
};

// 3. The Factory Component
export const LogoIcon = forwardRef<SVGSVGElement, LogoIconProps>(
  ({ name = 'origin', size = 24, className = '', fallbackIcon: FallbackIcon, ...props }, ref) => {
    const normalizedName = normalizeModelName(name as string);
    const MappedIcon = iconRegistry[normalizedName];
    const Fallback = FallbackIcon ?? OriginLogoIcon;

    if (!MappedIcon) {
      return <Fallback ref={ref} size={size} className={className} {...props} />;
    }

    return <MappedIcon ref={ref} size={size} className={className} {...props} />;
  }
);

LogoIcon.displayName = 'LogoIcon';

export const supportedLogoNames = Object.keys(iconRegistry) as AIModelName[];