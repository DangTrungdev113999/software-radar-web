import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages: base = '/software-radar-web/' khi build production (đổi cho khớp tên repo).
// Dev giữ base '/' để localhost work bình thường.
const isProd = process.env.NODE_ENV === 'production' || process.env.VITE_DEPLOY === '1';

export default defineConfig({
  plugins: [react()],
  base: isProd ? '/software-radar-web/' : '/',
  server: {
    port: 5180,
    strictPort: false,
  },
});
