import { defineConfig } from 'astro/config';
// import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  integrations: [
    react(),
    icon({
      include: {
        lucide: ["*"], // Include all icons from the lucide set
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});