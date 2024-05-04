import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            include: [/\.[tj]sx?$/, /\.vue$/],
            imports: ["vue", "vue-router", "pinia"],
            vueTemplate: true,
            dts: true,
            eslintrc: {
                enabled: true,
                filepath: "./.eslintrc-auto-import.json",
                globalsPropValue: true
            },
        }),
    ],
    test: {
        globals: true,
        environment: 'happy-dom'
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "@presentation": fileURLToPath(new URL("./src/presentation", import.meta.url))
        }
    },
    base: "/",
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import "@presentation/mixins/mq";
                    @import "@presentation/styles/global.scss";
                `,
            },
        },
    },
    server: {
        port: 3000
    }
})
