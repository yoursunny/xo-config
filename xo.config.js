const { js, ts, jest, literate, web, preact, pptr, merge } = require(".");

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
      ...merge(js, ts, jest, pptr),
    },
    {
      files: [
        "**/code/preact.tsx",
      ],
      ...merge(js, ts, web, preact),
    },
  ],
};
