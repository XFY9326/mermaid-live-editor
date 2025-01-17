export const env = {
  rendererUrl: import.meta.env.MERMAID_RENDERER_URL ?? '',
  krokiRendererUrl: import.meta.env.MERMAID_KROKI_RENDERER_URL ?? '',
  domain: import.meta.env.MERMAID_DOMAIN ?? ''
} as const;
