import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/E-commerce/", // Match the basename in React Router
  plugins: [react()],
});
