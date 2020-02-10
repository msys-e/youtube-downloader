module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
      "plugin:@typescript-eslint/recommended",
      "prettier/@typescript-eslint",
      "plugin:prettier/recommended" 
    ],
    parserOptions: {
      ecmaVersion: 2019,
      sourceType: "module"
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          trailingComma: "all",
          endOfLine: "lf",
          semi: true,
          singleQuote: true,
          printWidth: 80,
          tabWidth: 4
        }
      ]
    },
  };
  