import path from "path";
import react from "@vitejs/plugin-react";
import { builtinModules } from "module";
import tailwindcss from "tailwindcss";
import vike from "vike/plugin";
import { mdx } from "@cyco130/vite-plugin-mdx";
import { defineConfig } from "vite";

export default defineConfig({
    base: "https://tbscode.github.io/django-vike-chat/",
    plugins: [react(), vike({
        prerender: true
    }), mdx(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname),
        },
    },
    alias: {
        resolve: {
            "./runtimeConfig": "./runtimeConfig.browser",
        },
    },
    build: {
        rollupOptions: {
            external: [...builtinModules, /^node:/],
        },
    },
    server: {},
});
