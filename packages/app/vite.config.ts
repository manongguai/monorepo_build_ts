import  { myPlugin } from '@issue-vite-pnpm/lib/myPlugin';
import { defineConfig } from 'vite';
import viteConfig from '@millipede/viteconfig'

console.log(viteConfig);


export default viteConfig(defineConfig)
