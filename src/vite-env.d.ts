/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_API_CLIENT_ID: string;
  readonly VITE_API_CLIENT_SECRET: string;
  readonly VITE_API_AUTH_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
