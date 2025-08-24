# Rollup Configuration Explanation

## Overview

The configuration defines three main build targets:
1. **JavaScript Bundle** - Creates CommonJS and ES modules for the component library
2. **TypeScript Definitions** - Generates type definitions for TypeScript consumers
3. **Individual CSS Files** - Builds separate CSS files for specific components

## Configuration Breakdown

### 1. JavaScript Bundle Configuration

```javascript
{
  input: "src/index.tsx",
  output: [
    { file: "dist/index.js", format: "cjs", exports: "named" },
    { file: "dist/index.es.js", format: "esm" }
  ],
  // ... plugins and externals
}
```

**Purpose**: Builds the main JavaScript bundle in two formats:
- **CommonJS** (`dist/index.js`) - For Node.js environments and older bundlers
- **ES Modules** (`dist/index.es.js`) - For modern bundlers and tree-shaking support

**Key Plugins**:
- `peerDepsExternal()` - Excludes peer dependencies from the bundle
- `resolve()` - Resolves imports with `.js`, `.jsx`, `.ts`, `.tsx` extensions
- `commonjs()` - Converts CommonJS modules to ES6
- `postcss()` - Processes SCSS/CSS files, extracts to `index.css`, minifies
- `babel()` - Transpiles TypeScript/JSX to JavaScript with presets:
  - `@babel/preset-env` - Modern JavaScript features
  - `@babel/preset-react` - JSX transformation
  - `@babel/preset-typescript` - TypeScript support
- `terser()` - Minifies the output

**Externals**: `react` and `react-dom` are marked as external dependencies (not bundled)

### 2. TypeScript Definitions Configuration

```javascript
{
  input: "src/index.tsx",
  output: { file: "dist/index.d.ts", format: "es" },
  plugins: [dts({ compilerOptions: { skipLibCheck: true } })],
  external: ["react", "react-dom", /\.css$/, /\.scss$/]
}
```

**Purpose**: Generates TypeScript declaration files for type safety

**Key Features**:
- Uses `rollup-plugin-dts` to bundle TypeScript declarations
- Skips library type checking for faster builds
- Excludes CSS/SCSS files and React dependencies from type definitions

### 3. Individual CSS Build Configurations

Three separate configurations for component-specific CSS files:

```javascript
{
  input: "src/components/[component]/index.scss",
  output: { file: "dist/[component]/index.css" },
  plugins: [postcss({ /* ... */ })]
}
```

**Components with individual CSS builds**:
- **Modal** → `dist/modal/index.css`
- **Button** → `dist/button/index.css`  
- **Input** → `dist/input/index.css`

**Benefits**:
- Allows consumers to import only specific component styles
- Reduces CSS bundle size when only certain components are used
- Maintains modular architecture

## Plugin Configuration Details

### PostCSS Plugin
```javascript
postcss({
  extensions: ['.css', '.scss'],
  extract: true, // or "index.css" for main bundle
  minimize: true,
  use: ['sass']
})
```
- Processes SCSS files using Sass
- Extracts CSS to separate files
- Minifies output for production

### Babel Plugin
```javascript
babel({
  exclude: "node_modules/**",
  babelHelpers: "bundled",
  extensions: [".js", ".jsx", ".ts", ".tsx"],
  presets: [/* ... */]
})
```
- Excludes node_modules from transpilation
- Uses bundled helpers to avoid duplication
- Supports multiple file extensions

## Build Outputs

After running the build, the following files are generated:

```
dist/
├── index.js          # CommonJS bundle
├── index.es.js       # ES module bundle
├── index.css         # Main CSS bundle
├── index.d.ts        # TypeScript definitions
├── button/
│   └── index.css     # Button component styles
├── input/
│   └── index.css     # Input component styles
└── modal/
    └── index.css     # Modal component styles
```

## Usage Examples

### Importing the Full Library
```javascript
// Import all components
import { Button, Modal, Input } from 'your-library';
import 'your-library/dist/index.css';
```

### Importing Individual Components
```javascript
// Import specific components with their styles
import { Button } from 'your-library';
import 'your-library/dist/button/index.css';
```

### TypeScript Support
The generated `index.d.ts` provides full type safety for TypeScript projects.

## Benefits of This Configuration

1. **Multiple Output Formats** - Supports both CommonJS and ES modules
2. **Tree Shaking** - ES module format enables dead code elimination
3. **Modular CSS** - Individual component styles for optimized loading
4. **TypeScript Support** - Full type definitions for consumers
5. **Production Ready** - Minified and optimized output
6. **SCSS Support** - Modern CSS preprocessing capabilities
