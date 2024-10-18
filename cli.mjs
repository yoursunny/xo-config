#!/usr/bin/env node
import { createRequire } from "node:module";
import path from "node:path";

import { execaNode } from "execa";

const require = createRequire(import.meta.url);
const selfPath = path.dirname(require.resolve("."));
const xoPath = path.dirname(require.resolve("xo"));

process.exit((await execaNode(path.resolve(xoPath, "cli.js"), process.argv.slice(2), {
  env: {
    NODE_PATH: [
      path.resolve(selfPath, "node_modules"),
      path.resolve(selfPath, "../.."),
      path.resolve(xoPath, "node_modules"),
      path.resolve(xoPath, ".."),
    ].join(":"),
  },
  reject: false,
  stdin: "inherit",
  stdout: "inherit",
  stderr: "inherit",
})).exitCode);
