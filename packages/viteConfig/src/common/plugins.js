import { visualizer } from "rollup-plugin-visualizer";
import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";
import simpleHtmlPlugin from "vite-plugin-simple-html";
import viteCompression from "vite-plugin-compression";
/**
 * Create vite plugin
 * @param viteEnv
 */
export const createVitePlugins = (viteEnv) => {
    const { VITE_GLOB_APP_TITLE, VITE_REPORT } = viteEnv;
    return [
        react(),
        // esLint error messages are displayed on the browser interface
        checker({
            typescript: true,
            stylelint: {
                lintCommand: "stylelint ./src/**/*.less"
            }
        }),
        // Create a packaged compression configuration
        createCompression(viteEnv),
        // Inject variable into html file
        simpleHtmlPlugin({
            minify: true,
            inject: {
                data: { title: VITE_GLOB_APP_TITLE }
            }
        }),
        // Whether to generate package preview, analyze dependent package size for optimization
        VITE_REPORT && visualizer({ filename: "stats.html", gzipSize: true, brotliSize: true })
    ];
};
/**
 * Generate different compression rules according to the compress configuration
 * @param viteEnv
 */
const createCompression = (viteEnv) => {
    const { VITE_BUILD_COMPRESS = "none", VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv;
    const compressList = VITE_BUILD_COMPRESS.split(",");
    const plugins = [];
    if (compressList.includes("gzip")) {
        plugins.push(viteCompression({
            ext: ".gz",
            algorithm: "gzip",
            deleteOriginFile: VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
        }));
    }
    if (compressList.includes("brotli")) {
        plugins.push(viteCompression({
            ext: ".br",
            algorithm: "brotliCompress",
            deleteOriginFile: VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
        }));
    }
    return plugins;
};
