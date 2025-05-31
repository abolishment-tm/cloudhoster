import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import richSvg from "vite-plugin-react-rich-svg";

export default defineConfig({
  plugins: [
    react(),
    richSvg(),
    svgr({
      exportAsDefault: false,
    }),
  ],
});