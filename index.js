import babelParser from "@babel/eslint-parser";
import eslintPreact from "eslint-config-preact";
import xoBrowser from "eslint-config-xo/browser";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tsdoc from "eslint-plugin-tsdoc";

/** @typedef {import("xo").XoConfigItem} XoConfigItem */

/**
 * Merge XO options.
 * @param {XoConfigItem} base
 * @param  {...XoConfigItem} patches
 */
export function merge(base, ...patches) {
  const res = { ...base };
  for (const patch of patches) {
    for (const [key, value] of Object.entries(patch)) {
      if (Array.isArray(res[key])) {
        res[key] = [...res[key], ...value];
      } else if (typeof res[key] === "object") {
        res[key] = { ...res[key], ...value };
      } else {
        res[key] = value;
      }
    }
  }

  return res;
}

/**
 * Delete typescript-eslint rules.
 * @param {XoConfigItem} base
 * @param  {...XoConfigItem} patches
 */
export function stripTs(config) {
  config.rules = { ...config.rules };
  for (const key of Object.keys(config.rules)) {
    if (key.startsWith("@typescript-eslint/")) {
      delete config.rules[key];
    }
  }
  return config;
}

/**
 * XO options to enable @babel/eslint-parser.
 * @type {XoConfigItem}
 */
export const babel = {
  languageOptions: {
    parser: babelParser,
    parserOptions: {
      babelOptions: {
        plugins: ["@babel/plugin-syntax-jsx"],
      },
      requireConfigFile: false,
    },
  },
};

/**
 * XO options for JavaScript source.
 * @type {XoConfigItem}
 */
export const js = {
  plugins: {
    "simple-import-sort": simpleImportSort,
  },
  rules: {
    "@stylistic/array-element-newline": "off",
    "@stylistic/arrow-parens": ["error", "always"],
    "@stylistic/block-spacing": ["error", "always"],
    "@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "@stylistic/function-call-argument-newline": "off",
    "@stylistic/generator-star-spacing": ["error", { named: "after", anonymous: "neither", method: "before" }],
    "@stylistic/indent": ["error", 2, {
      SwitchCase: 1,
      VariableDeclarator: "first",
      outerIIFEBody: 0,
      FunctionDeclaration: { parameters: 2 },
      FunctionExpression: { parameters: 2 },
      flatTernaryExpressions: true,
    }],
    "@stylistic/indent-binary-ops": ["error", 2],
    "@stylistic/jsx-quotes": ["error", "prefer-double"],
    "@stylistic/max-len": "off",
    "@stylistic/max-statements-per-line": ["error", { max: 3 }],
    "@stylistic/multiline-ternary": "off",
    "@stylistic/no-mixed-operators": "off",
    "@stylistic/object-curly-newline": "off",
    "@stylistic/object-curly-spacing": ["error", "always"],
    "@stylistic/operator-linebreak": ["error", "after"],
    "@stylistic/padded-blocks": ["error", "never", { allowSingleLineBlocks: true }],
    "@stylistic/padding-line-between-statements": "off",
    "@stylistic/quotes": ["error", "double"],
    "@stylistic/yield-star-spacing": ["error", "after"],
    "import-x/extensions": "off",
    "import-x/first": "off",
    "import-x/no-mutable-exports": "off",
    "import-x/order": "off",
    "n/file-extension-in-import": "off",
    "n/no-extraneous-import": "off",
    "n/prefer-global/buffer": ["error", "always"],
    "n/prefer-global/console": "off",
    "n/prefer-global/process": ["error", "always"],
    "no-use-extend-native/no-use-extend-native": "off",
    "simple-import-sort/imports": "error",
    "unicorn/catch-error-name": ["error", { name: "err", ignore: ["^err"] }],
    "unicorn/consistent-function-scoping": "off",
    "unicorn/filename-case": "off",
    "unicorn/no-array-callback-reference": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/no-await-expression-member": "off",
    "unicorn/no-nested-ternary": "off",
    "unicorn/numeric-separators-style": "off",
    "unicorn/prefer-export-from": "off",
    "unicorn/prefer-json-parse-buffer": "off",
    "unicorn/prefer-math-trunc": "off",
    "unicorn/prefer-module": "off",
    "unicorn/prefer-number-properties": ["error", { checkInfinity: false }],
    "unicorn/prefer-regexp-test": "off",
    "unicorn/prefer-single-call": "off",
    "unicorn/prefer-spread": "off",
    "unicorn/prefer-ternary": "off",
    "unicorn/prefer-type-error": "off",
    "unicorn/prevent-abbreviations": "off",
    "capitalized-comments": "off",
    "constructor-super": "off",
    "default-case": "off",
    "max-params": "off",
    "new-cap": "off",
    "no-await-in-loop": "off",
    "no-bitwise": "off",
    "no-constant-condition": ["error", { checkLoops: false }],
    "no-implicit-coercion": ["error", { allow: ["!!"] }],
    "no-inner-declarations": "off",
    "no-lone-blocks": "off",
    "no-promise-executor-return": "off",
    "no-return-assign": "off",
    "no-warning-comments": "off",
    "object-shorthand": "off",
    "prefer-destructuring": "off",
    "prefer-template": "error",
  },
};

/**
 * XO options for TypeScript source.
 * @type {XoConfigItem}
 */
export const ts = {
  plugins: {
    tsdoc,
  },
  rules: {
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/class-literal-property-style": ["error", "fields"],
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/method-signature-style": ["error", "property"],
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-base-to-string": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/no-empty-object-type": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-redeclare": "off",
    "@typescript-eslint/no-unnecessary-qualifier": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-declaration-merging": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/prefer-readonly": "off",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/switch-exhaustiveness-check": "off",
    "@typescript-eslint/unified-signatures": "off",
    "import-x/export": "off",
    "import-x/no-cycle": "off",
    "import-x/no-unassigned-import": "off",
    "tsdoc/syntax": "warn",
    "no-redeclare": "off",
    "no-return-await": "off",
    "no-unused-vars": "off",
    "no-useless-constructor": "off",
  },
};

/**
 * XO options for literate programming.
 * @type {XoConfigItem}
 */
export const literate = {
  rules: {
    "@stylistic/padded-blocks": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "simple-import-sort/imports": "off",
    "unicorn/filename-case": "off",
    "unicorn/no-process-exit": "off",
  },
};

/**
 * XO options for web page.
 * @type {XoConfigItem}
 */
export const web = {
  languageOptions: {
    globals: xoBrowser[0].languageOptions.globals,
  },
  rules: {
    "n/no-unsupported-features/node-builtins": "off",
    "no-restricted-globals": xoBrowser[0].rules["no-restricted-globals"],
  },
};

/**
 * XO options for Preact component.
 * @type {XoConfigItem}
 */
export const preact = {
  plugins: eslintPreact[1].plugins,
  settings: eslintPreact[1].settings,
  rules: {
    ...Object.fromEntries(Object.entries(eslintPreact[1].rules).filter(([k]) => k.startsWith("react"))),
    "@typescript-eslint/no-unused-vars": "error",
    "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-space-before-closing": "off",
    "react/jsx-tag-spacing": ["error", {
      closingSlash: "never",
      beforeSelfClosing: "never",
      afterOpening: "never",
      beforeClosing: "proportional-always",
    }],
    "react/jsx-no-bind": "off",
    "react/no-did-mount-set-state": "off",
    "react/no-unknown-property": "off",
    "react/require-optimization": "off",
    "no-script-url": "off",
  },
};

/**
 * XO options for RE:DOM component.
 * @type {XoConfigItem}
 */
export const redom = {
  rules: {
    "import/no-unassigned-import": "off",
    "no-unused-expressions": ["error", { enforceForJSX: false }],
    "no-unused-vars": ["error", { varsIgnorePattern: "(^el$)|(^[A-Z])" }],
  },
};

/**
 * XO options for Puppeteer script.
 * @type {XoConfigItem}
 */
export const pptr = {
  languageOptions: {
    globals: {
      browser: false,
      context: false,
      page: false,
    },
  },
};
