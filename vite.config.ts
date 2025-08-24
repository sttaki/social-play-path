import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const repoBase = "/social-play-path/"; // <<< ime tvog repoa na GH Pages

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Lokalu treba "/" a na GH Pages "/<repo>/" da bi radilo učitavanje asseta/ruta
  base: mode === "development" ? "/" : repoBase,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
