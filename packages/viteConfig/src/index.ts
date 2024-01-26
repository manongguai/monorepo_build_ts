import {
  UserConfigExport,
} from "vite";
// import { createVitePlugins } from "./common/plugins";
// import { createProxy } from "./common/proxy";
// import { wrapperEnv } from "./common/getEnv";
import { resolve } from "path";

// @see: https://vitejs.dev/config/

function config(defineConfig: ( config: UserConfigExport) => UserConfigExport) {
  return defineConfig(({}) => {
    // const env = loadEnv(mode, root);
    // const viteEnv = wrapperEnv(env);
    return {
      base: './',
      resolve: {
        alias: {
          "@": resolve(__dirname, "./src"),
        },
      },
      server: {
        host: "0.0.0.0",
        port: 3000,
        open: false,
        cors: true,
        // Load proxy configuration from .env.development
        // proxy: createProxy(viteEnv.VITE_PROXY),
      },
      // plugins: createVitePlugins({
      //   VITE_USER_NODE_ENV: "development" ,
      //   VITE_GLOB_APP_TITLE: '测试',
      //   VITE_PORT: 3000,
      //   VITE_OPEN: false,
      //   VITE_REPORT: false,
      //   VITE_ROUTER_MODE: "hash",
      //   VITE_BUILD_COMPRESS: "none",
      //   VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: false,
      //   VITE_DROP_CONSOLE: false,
      //   VITE_PWA: false,
      //   VITE_PUBLIC_PATH: './',
      //   VITE_API_URL: './',
      //   VITE_PROXY: [],
      // }),
      esbuild: {
        pure:  [],
      },
      build: {
        outDir: "dist",
        minify: "esbuild",
        sourcemap: false,
        // Disable gzip compressed size reporting, which slightly reduces pack time
        reportCompressedSize: false,
        // Determine the chunk size that triggers the warning
        chunkSizeWarningLimit: 2000,
        rollupOptions: {
          output: {
            // Static resource classification and packaging
            chunkFileNames: "assets/js/[name]-[hash].js",
            entryFileNames: "assets/js/[name]-[hash].js",
            assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
          },
        },
      },
    };
  });
}

export default config