import { myPlugin } from '@issue-vite-pnpm/lib/myPlugin';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [myPlugin()],
  };
})
