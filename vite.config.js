/// <reference types="vitest" />
import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths(), tailwindcss(), dts({ rollupTypes: true })],
    build: {
        // library entry and output settings
        lib: {
            entry: resolve(__dirname, "lib/main.ts"),
            name: "a-ui",
            fileName: "a-ui",
        },
        // bundler options
        // externalize react-related imports
        rollupOptions: {
            external: ["react", "react-dom", "react/jsx-runtime"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "react/jsx-runtime": "react/jsx-runtime",
                },
            },
        },
    },
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./lib/test/setup.ts",
        css: true,
    },
});
