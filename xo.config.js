const { babel, js, ts, literate, web, preact, redom, pptr, merge } = require(".");

/** @type {import("xo").Options} */
module.exports = {
  ...js,
  overrides: [
    {
      files: [
        "**/*.ts",
      ],
      ...merge(js, ts),
    },
    // Activate each combination, to trigger error if rule name has a typo.
    {
      files: [
        "**/code/javascript.js",
      ],
      ...merge(js, literate),
    },
    {
      files: [
        "**/code/typescript.ts",
      ],
      ...merge(js, ts, pptr),
    },
    {
      files: [
        "**/code/preact.jsx",
      ],
      ...merge(babel, js, web, preact),
    },
    {
      files: [
        "**/code/preact.tsx",
      ],
      ...merge(js, ts, preact),
    },
    {
      files: [
        "**/code/redom.jsx",
      ],
      ...merge(babel, js, redom),
    },
  ],
};
