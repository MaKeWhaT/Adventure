const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { ESBuildMinifyPlugin } = require("esbuild-loader");
module.exports = merge(common, {
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        loader: "esbuild-loader",
        options: {
          loader: "jsx",
          target: "es2020",
        },
      },
      {
        test: [/\.tsx?$/],
        loader: "esbuild-loader",
        options: {
          loader: "tsx",
          target: "es2020",
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: "es2020",
      }),
    ],
  },
});
