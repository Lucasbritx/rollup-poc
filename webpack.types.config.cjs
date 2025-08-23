const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'temp.js', // This will be deleted, we only want the .d.ts file
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              declaration: true,
              declarationDir: './dist',
              emitDeclarationOnly: true,
              skipLibCheck: true,
              outDir: './dist',
            },
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        type: 'asset/resource',
        generator: {
          emit: false,
        },
      },
    ],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
};
