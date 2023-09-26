import path from "path"
import { defineConfig, loadEnv } from "vite"
import solidPlugin from "vite-plugin-solid"
import legacy from "@vitejs/plugin-legacy"
// import { dynamicBase } from "vite-plugin-dynamic-base"
import devtools from "solid-devtools/vite"

export default defineConfig(({ mode, command }) => {
  const { VITE_API_URL } = loadEnv(mode, process.cwd())
  return {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"),
        // "@solidjs/router": path.resolve(__dirname, "solid-router/src"),
      },
    },
    plugins: [
      devtools({
        // pass `true` or an object with options
        locator: {
          targetIDE: "vscode",
          componentLocation: true,
          jsxLocation: true,
        },
      }),
      solidPlugin(),
      legacy({
        targets: ["defaults"],
      }),
      // dynamicBase({
      //   // dynamic public path var string, default window.__dynamic_base__
      //   publicPath: " window.__dynamic_base__",
      //   // dynamic load resources on index.html, default false. maybe change default true
      //   transformIndexHtml: true,
      // }),
    ],
    base: VITE_API_URL,
    // base: "/",
    build: {
      // target: "es2015", //next
      // polyfillDynamicImport: false,
    },
    // experimental: {
    //   renderBuiltUrl: (filename, { type, hostId, hostType }) => {
    //     if (type === "asset") {
    //       return { runtime: `window.ALIST.cdn/${filename}` };
    //     }
    //     return { relative: true };
    //   },
    // },
    server: {
      host: "0.0.0.0",
      proxy: {
        "/api": {
          target: "http://localhost:5244",
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
        "*": {
          target: "http://localhost:5244",
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  }
})
