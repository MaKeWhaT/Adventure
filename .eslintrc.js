module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: [
    "prettier",
    "import",
    "jsx-a11y",
    "promise",
    "react",
    "react-hooks",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "func-names": 0,
    "no-undef": 0,
    "no-plusplus": 0,
    "no-console": 0,
    "no-use-before-define": 0,
    "no-restricted-syntax": 0,
    "no-unused-vars": 0,
    "react/react-in-jsx-scope": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/function-component-definition": 0,
    "react/jsx-props-no-spreading": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": [
      "warn",
      {
        additionalHooks: "useRecoilCallback",
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      excludedFiles: ["*.test.ts", "*.test.tsx"],
    },
  ],
  ignorePatterns: ["node_modules/**", "dist/**", "*.css", "*.scss"],
  settings: {
    react: {
      version: "detect",
    },
  },
};
