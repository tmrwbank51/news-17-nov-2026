import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Copy the front-page image into the output dir as entry.png. The image is
// resolved relative to this script (not the working directory), so the
// program behaves the same wherever the harness runs it from.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
await mkdir(outDir, { recursive: true });
await copyFile(join(here, "entry.jpg"), join(outDir, "entry.png"));
