import { defineConfig } from 'vite'

import baseConfig from './vite.config'

// TODO bundle the graphql generator libraries
export default defineConfig({
    ...baseConfig,
    plugins: [],
    build: {
        ...baseConfig.build,
        lib: {
            entry: ['src/generate.ts'],
            formats: ['cjs']
        },
        ssr: true
    }
})
