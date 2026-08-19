import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    router: {
      entry: "router.tsx",
    },
    server: {
      entry: "server.ts",
    },
  },
});
