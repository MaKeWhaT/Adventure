module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-prettier-scss"
  ],
  overrides: [
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss"
    }
  ],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["use", "each", "include", "mixin"],
      },
    ],
    "selector-class-pattern": null,
    "color-function-notation": null,
  },
};
