/// <reference types="vitest" />
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { nodeExternals } from 'rollup-plugin-node-externals'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    base: './',
    build: {
        lib: {
            entry: {
                index: path.resolve(__dirname, 'src/index.ts'),
                nuxt: path.resolve(__dirname, 'src/nuxt/index.ts'),
                plugin: path.resolve(__dirname, 'src/nuxt/plugin.ts')
            },
            formats: ['cjs', 'es']
        },
        rollupOptions: {
            external: ['@nuxt/schema', '@nuxt/kit', 'nuxt', 'vue', 'nuxt/app'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    },
    plugins: [
        vue(),
        dts({
            entryRoot: './src'
        }),
        {
            ...nodeExternals({
                deps: false
            }),
            enforce: 'pre'
        }
    ],
    test: {
        environment: 'jsdom'
    }
})
