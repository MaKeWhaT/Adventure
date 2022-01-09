module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  customSyntax: require("postcss-scss"),
  rules: {
    "selector-class-pattern": null,
    "color-function-notation": null,
  },
};
