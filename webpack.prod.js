const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "[name].[contenthash].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      linkType: "text/css",
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    }),
  ],
});
