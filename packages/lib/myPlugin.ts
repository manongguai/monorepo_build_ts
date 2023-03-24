import { PluginOption } from 'vite';

export function myPlugin(): PluginOption {
  return {
    name: 'my-plugin',
    configResolved() {
      console.log('test');
    },
  };
}
