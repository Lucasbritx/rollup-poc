import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import sass from 'rollup-plugin-sass';

export default [
  // JavaScript
  {
    input: "src/index.tsx",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        exports: "named",
      },
      {
        file: "dist/index.es.js",
        format: "esm",
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      commonjs(),
      babel({
        exclude: "node_modules/**",
        babelHelpers: "bundled",
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
      }),
      terser(),
    ],
    external: ["react", "react-dom"],
  },
  // TypeScript
  {
    input: "src/index.tsx",
    output: {
      file: "dist/index.d.ts",
      format: "es",
    },
    plugins: [
      dts({
        compilerOptions: {
          skipLibCheck: true,
        },
      }),
    ],
    external: [
      "react", 
      "react-dom",
      /\.css$/,
    ],
  },
  // CSS
  {
    input: "src/modal.css",
    output: {
      file: "dist/modal.css",
    },
    plugins: [
      postcss({
        modules: false,
        extract: true,
        minimize: true,
      }),
    ],
  },
];
