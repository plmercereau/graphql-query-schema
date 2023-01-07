import fs from 'fs'
import path from 'path'

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const PWD = process.env.PWD
const pkg = require(path.join(PWD, 'package.json'))

const tsEntry = path.resolve(PWD, 'src/index.ts')
const entry = fs.existsSync(tsEntry) ? tsEntry : tsEntry.replace('.ts', '.tsx')

const deps = [
    ...Object.keys(Object.assign({}, pkg.peerDependencies, pkg.dependencies))
]

export default defineConfig({
    plugins: [
        dts({
            exclude: ['**/*.spec.ts', '**/*.test.ts', '**/tests/**'],
            entryRoot: 'src',
            skipDiagnostics: true
        })
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        reporters: 'verbose',
        include: [
            `${PWD}/src/**/*.{spec,test}.{ts,tsx}`,
            `${PWD}/tests/**/*.{spec,test}.{ts,tsx}`
        ],
        coverage: {
            enabled: process.env.CI === 'true',
            reporter: ['json']
        }
    },
    build: {
        sourcemap: true,
        lib: {
            entry,
            name: pkg.name,
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
