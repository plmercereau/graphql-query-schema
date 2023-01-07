import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [dts()],
    test: {
        dir: 'tests'
    },
    build: {
        sourcemap: true,
        lib: {
            entry: 'src/index.ts',
            fileName: format =>
                format === 'cjs' ? `index.cjs.js` : `index.esm.js`,
            formats: ['cjs', 'es']
        },
        rollupOptions: {
            output: {
                globals: {
                    graphql: 'graphql'
                }
            }
        }
    }
})
