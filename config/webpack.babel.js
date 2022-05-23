const { merge } = require("webpack-merge");
const common = require("./config/webpack.common");

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },
});
