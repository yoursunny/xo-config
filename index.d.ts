import type { Options as XoOptions } from "xo";

/** XO options to enable @babel/eslint-parser. */
declare const babel: XoOptions;

/** XO options for JavaScript source. */
declare const js: XoOptions;

/** XO options for TypeScript source. */
declare const ts: XoOptions;

/** XO options for Jest test suite. */
declare const jest: XoOptions;

/** XO options for literate programming. */
declare const literate: XoOptions;

/** XO options for webpage. */
declare const web: XoOptions;

/** XO options for Preact component. */
declare const preact: XoOptions;

/** XO options for RE:DOM component. */
declare const redom: XoOptions;

/** XO options for Puppeteer script. */
declare const pptr: XoOptions;

/** Merge XO options. */
declare function merge(base: XoOptions, ...patches: XoOptions[]): XoOptions;
