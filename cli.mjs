#!/usr/bin/env node
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";

import { execaNode } from "execa";

const require = createRequire(import.meta.url);
const selfPath = dirname(require.resolve("."));
const xoPath = dirname(require.resolve("xo"));

process.exit((await execaNode(resolve(xoPath, "cli.js"), process.argv.slice(2), {
  env: {
    NODE_PATH: [
      resolve(selfPath, "node_modules"),
      resolve(selfPath, "../.."),
      resolve(xoPath, "node_modules"),
      resolve(xoPath, ".."),
    ].join(":"),
  },
  reject: false,
  stdin: "inherit",
  stdout: "inherit",
  stderr: "inherit",
})).exitCode);
