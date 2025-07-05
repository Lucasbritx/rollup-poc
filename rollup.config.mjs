import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

export default {
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
  input: "src/index.css",
  output: {
    file: "dist/style.css",
    format: "es",
  },
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    commonjs(),
    postcss({
      modules: false,
      extract: true,
      minimize: true,
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
  ],
  external: ["react", "react-dom"],
};
