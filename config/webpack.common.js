const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/main.tsx",
  output: {
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      name: "chunk-vendors",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "/public/index.html"),
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new webpack.ProgressPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
      pages: path.resolve(__dirname, "../pages"),
      Components: path.resolve(__dirname, "../src", "Components"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
