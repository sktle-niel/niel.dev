/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL of the CODEKATHAX PHP API (e.g. https://api.codekathax.online). */
  readonly VITE_API_BASE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
