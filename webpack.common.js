const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ProgressPlugin = require("webpack").ProgressPlugin;

module.exports = {
  entry: "./src/main.tsx",
  output: {
    clean: true,
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
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
    new ProgressPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      pages: path.resolve(__dirname, "pages"),
      Components: path.resolve(__dirname, "src", "Components"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
