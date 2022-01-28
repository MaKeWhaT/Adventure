const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /.(cjs|mjs|js|jsx)$/,
        exclude: /(.yarn|node_modules|bower_components)/,
        use: {
          loader: "swc-loader",
          options: {
            sync: true,
            jsc: {
              target: "es2015",
              minify: true,
              transform: {
                "react": {
                  "runtime": "automatic",
                  "pragma": "React.createElement",
                  "pragmaFrag": "React.Fragment",
                  "throwIfNamespace": true,
                  "useBuiltins": false
                }
              },
              parser: {
                syntax: "ecmascript",
                jsx: true,
                dynamicImport: true,
                importMeta: true,
                exportDefaultFrom: true,
                exportNamespaceFrom: true,
                useBuiltins: true
              }
            }
          }
        }
      },
      {
        test: /.(ts|tsx)$/,
        exclude: /(.yarn|node_modules|bower_components)/,
        use: {
          loader: "swc-loader",
          options: {
            sync: true,
            jsc: {
              target: "es2015",
              transform: {
                "react": {
                  "runtime": "automatic",
                  "pragma": "React.createElement",
                  "pragmaFrag": "React.Fragment",
                  "throwIfNamespace": true,
                  "useBuiltins": false
                }
              },
              parser: {
                syntax: "typescript",
                tsx: true,
                dynamicImport: true,
                importMeta: true,
                exportDefaultFrom: true,
                exportNamespaceFrom: true,
                useBuiltins: true
              }
            }
          }
        }
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'chunk-vendors',
    },
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      pages: path.resolve(__dirname, 'pages'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
