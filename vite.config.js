import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig ({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                features: resolve(__dirname, 'features/index.html'),
                about: resolve(__dirname, 'about/index.html'),
                blog: resolve(__dirname, 'blog/index.html'),
                gallery: resolve(__dirname, 'gallery/index.html'),
                residential_rules: resolve(__dirname, 'residential-rules/index.html'),
                // contact: resolve(__dirname, 'contact/index.html'),
            },
        },
    },
    plugins: [
        tailwindcss(),
    ],
})
