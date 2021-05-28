/** @typedef {import("xo").Options} XoOptions */

/**
 * XO options to enable babel-eslint.
 * @type {XoOptions}
 */
const babel = {
  parser: "babel-eslint",
};

/**
 * XO options for JavaScript source.
 * @type {XoOptions}
 */
const js = {
  envs: ["es2020"],
  plugins: [
    "simple-import-sort",
  ],
  extends: [
    "xo",
  ],
  rules: {
    "import/extensions": "off",
    "import/first": "off",
    "import/no-mutable-exports": "off",
    "import/order": "off",
    "node/file-extension-in-import": "off",
    "promise/param-names": "off",
    "simple-import-sort/imports": "error",
    "unicorn/catch-error-name": ["error", { name: "err", caughtErrorsIgnorePattern: "^err" }],
    "unicorn/consistent-function-scoping": "off",
    "unicorn/filename-case": "off",
    "unicorn/no-array-callback-reference": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/no-nested-ternary": "off",
    "unicorn/numeric-separators-style": "off",
    "unicorn/prefer-module": "off",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/prefer-number-properties": ["error", { checkInfinity: false }],
    "unicorn/prefer-regexp-test": "off",
    "unicorn/prefer-spread": "off",
    "unicorn/prefer-ternary": "off",
    "unicorn/prefer-type-error": "off",
    "unicorn/prevent-abbreviations": "off",
    "array-element-newline": "off",
    "arrow-parens": ["error", "always"],
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "capitalized-comments": "off",
    "comma-dangle": ["error", "always-multiline"],
    "constructor-super": "off",
    "default-case": "off",
    "function-call-argument-newline": "off",
    "generator-star-spacing": ["error", { named: "after", anonymous: "neither", method: "before" }],
    indent: ["error", 2, {
      SwitchCase: 1,
      VariableDeclarator: "first",
      outerIIFEBody: 0,
      FunctionDeclaration: { parameters: 2 },
      FunctionExpression: { parameters: 2 },
      flatTernaryExpressions: true,
    }],
    "max-params": "off",
    "max-statements-per-line": ["error", { max: 3 }],
    "new-cap": "off",
    "no-await-in-loop": "off",
    "no-implicit-coercion": ["error", { allow: ["!!"] }],
    "no-inner-declarations": "off",
    "no-mixed-operators": "off",
    "no-promise-executor-return": "off",
    "no-return-assign": "off",
    "no-warning-comments": "off",
    "object-curly-spacing": ["error", "always"],
    "padded-blocks": ["error", "never", { allowSingleLineBlocks: true }],
    "padding-line-between-statements": "off",
    "prefer-destructuring": "off",
    "prefer-template": "error",
    quotes: ["error", "double"],
    "yield-star-spacing": ["error", "after"],
  },
};

/**
 * XO options for TypeScript source.
 * @type {XoOptions}
 */
const ts = {
  extends: [
    "xo-typescript",
  ],
  rules: {
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/brace-style": js.rules["brace-style"],
    "@typescript-eslint/class-literal-property-style": ["error", "fields"],
    "@typescript-eslint/comma-dangle": ["error", "always-multiline"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/indent": js.rules.indent,
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/no-base-to-string": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-redeclare": "off",
    "@typescript-eslint/no-unnecessary-qualifier": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/object-curly-spacing": ["error", "always"],
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/prefer-readonly": "off",
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/quotes": js.rules.quotes,
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/switch-exhaustiveness-check": "off",
    "@typescript-eslint/unified-signatures": "off",
    "import/export": "off",
    "import/no-cycle": "off",
    "import/no-unassigned-import": "off",
    "brace-style": "off",
    indent: "off",
    "no-redeclare": "off",
    "no-return-await": "off",
    "no-unused-vars": "off",
    "no-useless-constructor": "off",
    quotes: "off",
  },
};

/**
 * XO options for Jest test suite.
 * @type {XoOptions}
 */
const jest = {
  extends: [
    "plugin:jest/recommended",
  ],
  rules: {
    "@typescript-eslint/no-invalid-void-type": "off",
    "import/no-extraneous-dependencies": "off",
    "jest/expect-expect": "off",
    "jest/no-conditional-expect": "off",
    "jest/no-standalone-expect": "off",
  },
};

/**
 * XO options for literate programming.
 * @type {XoOptions}
 */
const literate = {
  rules: {
    "@typescript-eslint/no-unsafe-call": "off",
    "simple-import-sort/imports": "off",
    "unicorn/filename-case": "off",
    "padded-blocks": "off",
  },
};

/**
 * XO options for web page.
 * @type {XoOptions}
 */
const web = {
  envs: ["browser"],
  globals: [
    "WebSocket",
    "WebTransport",
  ],
};

/**
 * XO options for Preact component.
 * @type {XoOptions}
 */
const preact = {
  extends: [
    "xo-preact",
  ],
  envs: ["browser"],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-no-bind": "off",
    "react/require-optimization": "off",
    "no-script-url": "off",
  },
};

/**
 * XO options for RE:DOM component.
 * @type {XoOptions}
 */
const redom = {
  envs: ["browser"],
  rules: {
    "import/no-unassigned-import": "off",
    "no-unused-expressions": ["error", { enforceForJSX: false }],
    "no-unused-vars": ["error", { varsIgnorePattern: "(^el$)|(^[A-Z])" }],
  },
};

/**
 * XO options for Puppeteer script.
 * @type {XoOptions}
 */
const pptr = {
  globals: [
    "browser",
    "context",
    "page",
    "jestPuppeteer",
  ],
};

/**
 * Merge XO options.
 * @param {XoOptions} base
 * @param  {...XoOptions} patches
 */
function merge(base, ...patches) {
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

  if (!res.extends.includes("xo-typescript")) {
    res.rules = Object.fromEntries(
      Object.entries(res.rules)
        .filter(([rule]) => !rule.startsWith("@typescript-eslint/")),
    );
  }
  return res;
}

module.exports = {
  babel,
  js,
  ts,
  jest,
  literate,
  web,
  preact,
  redom,
  pptr,
  merge,
};
