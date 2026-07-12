import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';

export function getModel(modelId: string) {
  if (modelId.startsWith('claude')) {
    return anthropic(modelId, {
      structuredOutputs: true,
    });
  }
  
  // Default to OpenAI
  return openai(modelId, {
    structuredOutputs: true,
  });
}
