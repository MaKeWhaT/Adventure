const path = require("path");
const merge = require("webpack-merge").merge;
const webpack = require("webpack");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "storybook-addon-turbo-build",
      options: {
        optimizationLevel: 3,
        disableSourceMap: true,
      },
    },
  ],
  framework: "@storybook/react",
  features: {
    storyStoreV7: true,
  },
  core: {
    builder: "@storybook/builder-webpack5",
    options: {
      lazyCompilation: true,
      fsCache: true,
    },
  },
  webpackFinal: async (config) => {
    return merge(config, {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src"),
          pages: path.resolve(__dirname, "../pages"),
          Components: path.resolve(__dirname, "../src", "Components"),
        },
      },
      plugins: [
        new webpack.ProvidePlugin({
          React: "react",
        }),
      ],
    });
  },
};
