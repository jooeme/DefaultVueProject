module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  rules: {
    // enable additional rules
    indent: ["error", 2, { SwitchCase: 1 }],

    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],

    // override default options for rules from base configurations
    "comma-dangle": ["error", "never"],
    "no-cond-assign": ["error", "always"],

    // disable rules from base configurations
    "no-console": "off",
    "no-debugger": "off",
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};
