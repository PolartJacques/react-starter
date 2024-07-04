module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    jsx: true,
    useJSXTextNode: true,
    project: "./tsconfig.app.json",
  },
  plugins: ["react-refresh", "@typescript-eslint/eslint-plugin", "import"],
  settings: {
    "import/extensions": [".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    ////////////
    // ESLINT //
    ////////////
    "no-console": ["error", { allow: ["warn", "error", "debug"] }], // improvment // clean code
    eqeqeq: "error", // safety
    "no-promise-executor-return": ["error", { allowVoid: true }], // safety
    "no-unused-private-class-members": "error", // improvment // clean code
    "no-use-before-define": "error", // code style
    "default-param-last": "error", // improvment
    "dot-notation": "error", // improvment

    ///////////////////////
    // TYPESCRIPT ESLINT //
    ///////////////////////
    "@typescript-eslint/explicit-function-return-type": "error", // code style
    "@typescript-eslint/no-explicit-any": "error", // safety
    "@typescript-eslint/switch-exhaustiveness-check": [
      "error",
      {
        allowDefaultCaseForExhaustiveSwitch: false,
        requireDefaultForNonUnion: true,
      },
    ], // safety
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        args: "all",
        argsIgnorePattern: "^_",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ], // improvment // clean code
    "@typescript-eslint/consistent-type-imports": "error", // improvment

    ////////////
    // IMPORT //
    ////////////
    "import/no-cycle": "error",
  },
};
