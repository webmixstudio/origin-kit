import React, { forwardRef } from 'react';
import {
  AnthropicIcon,
  GeminiIcon,
  GrokIcon,
  IconProps,
  MidjourneyIcon,
  OpenAIIcon,
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
  | (string & {});

export interface LogoIconProps extends IconProps {
  /** Model/provider name. */
  name: AIModelName;
}

type IconComponent = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>;

/* -------------------------------------------------------------------------- */
/* Registry                                                                   */
/* -------------------------------------------------------------------------- */

export const iconRegistry = Object.freeze<Record<string, IconComponent>>({
  // OpenAI
  gpt: OpenAIIcon,
  'gpt-3.5': OpenAIIcon,
  'gpt-4': OpenAIIcon,
  'gpt-4o': OpenAIIcon,
  openai: OpenAIIcon,

  // Anthropic
  claude: AnthropicIcon,
  'claude-3': AnthropicIcon,
  anthropic: AnthropicIcon,

  // Google
  gemini: GeminiIcon,
  'gemini-pro': GeminiIcon,
  google: GeminiIcon,

  // xAI
  grok: GrokIcon,
  xai: GrokIcon,

  // Others
  midjourney: MidjourneyIcon,
});

/* -------------------------------------------------------------------------- */
/* Aliases                                                                    */
/* -------------------------------------------------------------------------- */

const aliasRegistry = Object.freeze<Record<string, string>>({
  // OpenAI
  gpt4: 'gpt-4',
  'gpt 4': 'gpt-4',

  gpt4o: 'gpt-4o',
  'gpt 4o': 'gpt-4o',

  gpt35: 'gpt-3.5',
  'gpt 3.5': 'gpt-3.5',
  'gpt-35': 'gpt-3.5',

  'open ai': 'openai',

  // Anthropic
  'claude 3': 'claude-3',

  // Google
  'gemini pro': 'gemini-pro',

  // xAI
  'x ai': 'xai',

  // Midjourney
  'mid journey': 'midjourney',
});

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

export function normalizeModelName(name?: string): string {
  if (!name) {
    return '';
  }

  let normalized = name
    .toLowerCase()
    .trim()
    .replace(/[_-]/g, ' ')
    .replace(/\s+/g, ' ');

  // Remove provider prefixes
  normalized = normalized
    .replace(/^openai[:/]\s*/, '')
    .replace(/^anthropic[:/]\s*/, '')
    .replace(/^google[:/]\s*/, '')
    .replace(/^xai[:/]\s*/, '');

  return aliasRegistry[normalized] ?? normalized.replace(/\s+/g, '-');
}

export function hasLogo(name?: string): boolean {
  return normalizeModelName(name) in iconRegistry;
}

export function getLogoComponent(name?: string): IconComponent | undefined {
  return iconRegistry[normalizeModelName(name)];
}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export const LogoIcon = forwardRef<SVGSVGElement, LogoIconProps>(
  (
    {
      name,
      size = 24,
      className = '',
      ...props
    },
    ref
  ) => {
    const Icon = getLogoComponent(name);

    if (!Icon) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(
          `[LogoIcon] The model name "${name}" does not match any registered icons.`
        );
      }
      return null;
    }

    return (
      <Icon
        ref={ref}
        size={size}
        className={className}
        {...props}
      />
    );
  }
);
LogoIcon.displayName = 'LogoIcon';

/* -------------------------------------------------------------------------- */
/* Exports                                                                    */
/* -------------------------------------------------------------------------- */

export const supportedLogoNames = Object.keys(iconRegistry) as AIModelName[];