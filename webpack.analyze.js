const { merge } = require("webpack-merge");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const prod = require("./webpack/webpack.prod");

module.exports = merge(prod, {
  plugins: [new BundleAnalyzerPlugin({ openAnalyzer: true })],
});
