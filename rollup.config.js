import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
    /* TODO component name */
    input: 'src/.jsx',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            exports: 'default'
        },
        {
            file: 'dist/index.es.js',
            format: 'esm',
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
            presets: ['@babel/preset-react']
        }),
        terser()
    ],
    external: ['react', 'react-dom']
};