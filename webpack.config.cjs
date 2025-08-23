const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = [
  // Main JavaScript bundle (CommonJS)
  {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      library: {
        type: 'commonjs2',
      },
      clean: true,
    },
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        },
        {
          test: /\.(scss|css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'index.css',
      }),
    ],
    optimization: {
      minimizer: [
        new TerserPlugin(),
        new CssMinimizerPlugin(),
      ],
    },
  },
  // ES Module bundle
  {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.es.js',
      library: {
        type: 'module',
      },
      environment: {
        module: true,
      },
    },
    experiments: {
      outputModule: true,
    },
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { modules: false }],
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        },
        {
          test: /\.(scss|css)$/,
          use: ['css-loader', 'sass-loader'],
        },
      ],
    },
    optimization: {
      minimizer: [new TerserPlugin()],
    },
  },
  // Button component CSS
  {
    mode: 'production',
    entry: './src/components/button/index.scss',
    output: {
      path: path.resolve(__dirname, 'dist/button'),
      filename: 'temp.js', // Will be cleaned up
    },
    module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'index.css',
      }),
    ],
    optimization: {
      minimizer: [new CssMinimizerPlugin()],
    },
  },
  // Input component CSS
  {
    mode: 'production',
    entry: './src/components/input/index.scss',
    output: {
      path: path.resolve(__dirname, 'dist/input'),
      filename: 'temp.js', // Will be cleaned up
    },
    module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'index.css',
      }),
    ],
    optimization: {
      minimizer: [new CssMinimizerPlugin()],
    },
  },
  // Modal component CSS
  {
    mode: 'production',
    entry: './src/components/modal/index.scss',
    output: {
      path: path.resolve(__dirname, 'dist/modal'),
      filename: 'temp.js', // Will be cleaned up
    },
    module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'index.css',
      }),
    ],
    optimization: {
      minimizer: [new CssMinimizerPlugin()],
    },
  },
];
