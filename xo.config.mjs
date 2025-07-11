import { babel, js, literate, merge, pptr, preact, redom, stripTs, ts, web } from "./index.js";

/** @type {import("xo").FlatXoConfig} */
const config = [
  js,
  // Activate each combination, to trigger error if rule name has a typo.
  {
    files: ["**/code/javascript.js"],
    ...merge(js, literate),
  },
  {
    files: ["**/code/typescript.ts"],
    ...merge(js, ts, pptr),
  },
  {
    files: ["**/code/preact.jsx"],
    ...stripTs(merge(js, web, preact)),
  },
  {
    files: ["**/code/preact.tsx"],
    ...merge(js, ts, web, preact),
  },
  {
    files: ["**/code/redom.jsx"],
    ...merge(babel, js, redom),
  },
];

export default config;
