const path = require("path/posix");
const { merge } = require("webpack-merge");
const common = require("./config/webpack.esbuild");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [],
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    hot: true,
    port: 3000,
    host: "0.0.0.0",
    https: true,
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    historyApiFallback: true,
    open: true,
  },
});
