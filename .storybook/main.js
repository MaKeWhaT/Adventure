const path = require('path')
const rootPath = path.resolve(__dirname, `../`)

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  async viteFinal(config, { configType }) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(rootPath, "src"),
      pages: path.resolve(rootPath, "pages"),
    }
    return config;
  },
}
