export const BACKEND_URL: string =
  import.meta.env.VITE_BACKEND_URL ?? ("http://localhost:3000" as const);
