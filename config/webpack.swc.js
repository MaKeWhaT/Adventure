const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /.(cjs|mjs|js|jsx)$/,
        exclude: /(.yarn|node_modules|bower_components)/,
        use: {
          loader: "swc-loader",
          options: {
            sync: true,
            jsc: {
              target: "es2015",
              minify: true,
              transform: {
                react: {
                  runtime: "automatic",
                  pragma: "React.createElement",
                  pragmaFrag: "React.Fragment",
                  throwIfNamespace: true,
                  useBuiltins: false,
                },
              },
              parser: {
                syntax: "ecmascript",
                jsx: true,
                dynamicImport: true,
                importMeta: true,
                exportDefaultFrom: true,
                exportNamespaceFrom: true,
                useBuiltins: true,
              },
            },
          },
        },
      },
      {
        test: /.(ts|tsx)$/,
        exclude: /(.yarn|node_modules|bower_components)/,
        use: {
          loader: "swc-loader",
          options: {
            sync: true,
            jsc: {
              target: "es2015",
              transform: {
                react: {
                  runtime: "automatic",
                  pragma: "React.createElement",
                  pragmaFrag: "React.Fragment",
                  throwIfNamespace: true,
                  useBuiltins: false,
                },
              },
              parser: {
                syntax: "typescript",
                tsx: true,
                dynamicImport: true,
                importMeta: true,
                exportDefaultFrom: true,
                exportNamespaceFrom: true,
                useBuiltins: true,
              },
            },
          },
        },
      },
    ],
  },
});
