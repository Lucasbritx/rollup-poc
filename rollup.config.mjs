import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import filesize from "rollup-plugin-filesize";

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
      postcss({
        extensions: ['.css', '.scss'],
        extract: "index.css",
        minimize: true,
        use: ['sass'],
      }),
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
      filesize(),
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
      /\.scss$/,
    ],
  },
  // SCSS
  {
    input: "src/components/modal/index.scss",
    output: {
      file: "dist/modal/index.css",
    },
    plugins: [
      postcss({
        extensions: ['.css', '.scss'],
        extract: true,
        minimize: true,
        use: ['sass'],
      }),
    ],
  },
  {
    input: "src/components/button/index.scss",
    output: {
      file: "dist/button/index.css",
    },
    plugins: [
      postcss({
        extensions: ['.css', '.scss'],
        extract: true,
        minimize: true,
        use: ['sass'],
      }),
    ],
  },
  {
    input: "src/components/input/index.scss",
    output: {
      file: "dist/input/index.css",
    },
    plugins: [
      postcss({
        extensions: ['.css', '.scss'],
        extract: true,
        minimize: true,
        use: ['sass'],
      }),
    ],
  },
];
