# Webpack vs Rollup Configuration Comparison

This document provides a detailed comparison between the Webpack and Rollup configurations used in this project for building a React component library.

## 📁 File Structure & Format

### Webpack Configuration
- **File**: `webpack.config.cjs`
- **Format**: CommonJS (`.cjs`)
- **Export**: `module.exports = [...]`
- **Lines**: 187 total

### Rollup Configuration
- **File**: `rollup.config.mjs`
- **Format**: ES Module (`.mjs`)
- **Export**: `export default [...]`
- **Lines**: 117 total

## 🔧 Configuration Architecture

### Webpack Approach (5 separate configurations)
1. **CommonJS bundle** - Main bundle with CSS extraction
2. **ES Module bundle** - ESM bundle without CSS extraction
3. **Button CSS** - Standalone CSS build
4. **Input CSS** - Standalone CSS build
5. **Modal CSS** - Standalone CSS build

### Rollup Approach (5 configurations, more streamlined)
1. **JavaScript bundle** - Both CJS + ESM outputs in single config
2. **TypeScript declarations** - Generates `.d.ts` files
3. **Modal CSS** - Standalone CSS build
4. **Button CSS** - Standalone CSS build
5. **Input CSS** - Standalone CSS build

## 🎯 Key Architectural Differences

### Bundle Generation Strategy

**Webpack:**
```javascript
// Separate configurations for each format
{
  // CommonJS configuration
  output: {
    filename: "index.js",
    library: { type: "commonjs2" }
  }
},
{
  // ES Module configuration  
  output: {
    filename: "index.es.js",
    library: { type: "module" }
  }
}
```

**Rollup:**
```javascript
// Single configuration with multiple outputs
{
  input: "src/index.tsx",
  output: [
    { file: "dist/index.js", format: "cjs" },
    { file: "dist/index.es.js", format: "esm" }
  ]
}
```

### CSS Processing

**Webpack:**
```javascript
// Main bundle: Extract CSS
use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]

// ES Module: Inline CSS
use: ["css-loader", "sass-loader"]

// Component CSS: Extract only
use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
```

**Rollup:**
```javascript
// Consistent across all configs
postcss({
  extensions: ['.css', '.scss'],
  extract: true, // or "index.css" for specific filename
  minimize: true,
  use: ['sass'],
})
```

### TypeScript Declarations

**Webpack:**
- Requires separate npm script: `build:types-webpack`
- Uses external `tsc` command
- Manual process outside webpack config

**Rollup:**
- Built into configuration using `rollup-plugin-dts`
- Integrated build process
- Automatic generation during build

## 🔌 Plugin Ecosystem Comparison

### Webpack Plugins Used
```javascript
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

// Custom plugin for bundle size reporting
class BundleSizePlugin {
  // Custom implementation needed
}
```

### Rollup Plugins Used
```javascript
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import filesize from "rollup-plugin-filesize"; // Built-in size reporting
```

## ⚙️ Configuration Complexity

### Webpack Configuration Features
- **Lines of code**: 187
- **Loader chains**: Separate for each build type
- **External dependencies**: Manual configuration per build
- **Size reporting**: Custom plugin implementation required
- **CSS extraction**: Multiple plugin coordination needed

### Rollup Configuration Features  
- **Lines of code**: 117 (38% fewer lines)
- **Plugin reuse**: Consistent plugin configurations
- **External dependencies**: Automatic with `peerDepsExternal()`
- **Size reporting**: Built-in with `filesize()` plugin
- **CSS processing**: Single plugin handles everything

## 🎨 Detailed CSS Handling

### Webpack CSS Strategy
```javascript
// Different strategies per bundle type
{
  // Main bundle - Extract CSS to separate file
  test: /\.(scss|css)$/,
  use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
},
{
  // ES Module - Inline CSS for tree-shaking
  test: /\.(scss|css)$/,
  use: ["css-loader", "sass-loader"]
}
```

### Rollup CSS Strategy
```javascript
// Consistent approach with simple boolean toggle
postcss({
  extensions: ['.css', '.scss'],
  extract: "index.css", // Extract to specific file
  // OR
  extract: true,        // Extract to default location
  minimize: true,
  use: ['sass'],
})
```

## 🚀 Build Output Differences

### Webpack Build Characteristics
- Generates temporary `temp.js` files for CSS-only builds
- Requires manual cleanup of unused JavaScript files
- More verbose build output with detailed asset information
- Custom bundle size reporting integration

### Rollup Build Characteristics
- Clean CSS-only outputs (no unnecessary JS files)
- Streamlined build process
- Tree-shaking optimized by default
- Built-in file size reporting

## 📊 Performance & Optimization

### Webpack Optimizations
```javascript
optimization: {
  minimizer: [
    new TerserPlugin(),           // JS minification
    new CssMinimizerPlugin()      // CSS minification
  ]
}
```

### Rollup Optimizations
```javascript
plugins: [
  terser(),                      // JS minification
  postcss({ minimize: true })    // CSS minification built-in
]
```

## 🔄 External Dependencies Handling

### Webpack Externals
```javascript
// Manual configuration required for each bundle
externals: {
  react: "react",
  "react-dom": "react-dom",
}
```

### Rollup Externals
```javascript
// Automatic peer dependency externalization
plugins: [
  peerDepsExternal(), // Automatically reads package.json
],
external: ["react", "react-dom"] // Additional manual externals if needed
```

## 📈 Bundle Size Reporting

### Webpack (Custom Implementation)
```javascript
class BundleSizePlugin {
  apply(compiler) {
    compiler.hooks.done.tap('BundleSizePlugin', (stats) => {
      // Custom implementation required
      // 25+ lines of custom code
    });
  }
}
```

### Rollup (Built-in)
```javascript
import filesize from "rollup-plugin-filesize";

plugins: [
  filesize(), // One line - built-in functionality
]
```

## 🎯 Summary Comparison

| Aspect | Webpack | Rollup |
|--------|---------|---------|
| **Configuration Size** | 187 lines | 117 lines (-38%) |
| **Learning Curve** | Steeper (more concepts) | Gentler (simpler API) |
| **CSS Handling** | Multiple plugins/loaders | Single plugin solution |
| **Bundle Strategy** | Separate configs per format | Multiple outputs per config |
| **TypeScript Support** | External `tsc` command | Built-in `dts` plugin |
| **Size Reporting** | Custom plugin needed | Built-in `filesize` plugin |
| **External Dependencies** | Manual configuration | Automatic with `peerDepsExternal` |
| **Tree Shaking** | Good (requires configuration) | Excellent (by default) |
| **Build Output** | More verbose, temp files | Clean, optimized |
| **Ecosystem** | Larger, more mature | Smaller, more focused |
| **Library Builds** | Good (with setup) | Excellent (optimized for) |
| **Application Builds** | Excellent | Good |

## 🏆 Recommendations

### Choose Webpack When:
- Building complex applications with multiple entry points
- Need extensive loader ecosystem and plugin variety
- Require fine-grained control over build process
- Working with legacy codebases
- Need hot module replacement and dev server features

### Choose Rollup When:
- Building libraries and packages for npm
- Want cleaner, more maintainable configuration
- Priority on smaller bundle sizes and tree-shaking
- Prefer ES6 module-first approach
- Want faster build times for libraries

## 🔗 Related Files
- `webpack.config.cjs` - Webpack configuration
- `rollup.config.mjs` - Rollup configuration  
- `package.json` - Build scripts and dependencies
- `ROLLUP_VS_WEBPACK.md` - Additional comparison notes
