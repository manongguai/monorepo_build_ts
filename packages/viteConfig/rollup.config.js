import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from '@rollup/plugin-typescript';
import json from "@rollup/plugin-json";
import builtins from "rollup-plugin-node-builtins";
import globals from "rollup-plugin-node-globals";
// import copy from 'rollup-plugin-copy'
export default {
  input: "src/index.ts",
 
  output: {
    file: "dist/index.cjs",
    format: "cjs",
  },
  plugins: [
    // builtins，globals 处理.node文件的报错
    nodeResolve(),
    commonjs(),
    typescript(),
    builtins(), 
    globals(),
    json()
  ],
};


/* 
rollup-plugin-node-builtins 是一个 Rollup 插件，用于在使用 Rollup 构建时，模拟 Node.js 的内置模块（built-in modules）。在浏览器环境中，没有像在 Node.js 中那样直接可用的内置模块，但有时你的代码或依赖项可能使用了 Node.js 内置模块，例如 path、fs、crypto 等。

这个插件的主要作用是处理你的代码或依赖项中对 Node.js 内置模块的引用，以便在浏览器环境中正确运行。具体来说，它会模拟这些内置模块的实现，以便在浏览器中使用类似的功能。

使用这个插件有几个常见的场景：

处理 Node.js 内置模块的引用：
当你的代码或依赖项中使用了 Node.js 内置模块时，这个插件会为这些模块提供浏览器环境下的实现，以便在浏览器中正确运行。

兼容性处理：
有些库或代码可能对 Node.js 内置模块有依赖，而这些模块在浏览器中并不直接可用。使用这个插件可以解决这种兼容性问题，确保代码在浏览器中能够正常执行。

支持浏览器环境下的特定功能：
一些浏览器环境下可能没有提供的功能，可以通过这个插件来模拟实现，以确保在浏览器中能够使用特定的功能。



rollup-plugin-node-globals 是 Rollup 的插件之一，用于处理 Node.js 中全局变量（globals）的情况。在 Node.js 中，有一些全局变量是特定于环境的，例如 global、process、Buffer 等。这些变量在浏览器环境下是不存在的，因此在将 Node.js 代码转换为适用于浏览器的代码时，可能需要模拟这些全局变量。

rollup-plugin-node-globals 的作用是为你的代码提供这些 Node.js 中的全局变量的浏览器环境下的实现，以确保在浏览器中正确运行。

使用这个插件的示例：

javascript
Copy code
// rollup.config.js
import nodeGlobals from 'rollup-plugin-node-globals';

export default {
  // 其他配置...
  plugins: [
    // 其他插件...
    nodeGlobals(),
  ],
  // ...
};
这个插件通常与其他插件一起使用，例如 @rollup/plugin-node-resolve，以确保正确解析和处理 Node.js 中的全局变量引用。

要注意的是，使用这类插件时需要小心，确保只在真正需要时才使用。在许多情况下，现代的前端工具链和库已经提供了对浏览器环境的兼容性，而不需要过多依赖全局变量。因此，在使用这类插件之前，请仔细考虑是否有更好的解决方案，以避免引入不必要的复杂性和潜在的问题。
*/