const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      name: "chunk-vendors",
    },
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
      pages: path.resolve(__dirname, "../pages"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
