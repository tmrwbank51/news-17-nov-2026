// Copy the entry image to the output directory as entry.png.
// The image is a dense one-day front page (40 stories + world map); this
// program only copies it, it never draws or alters it.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(out, { recursive: true });
copyFileSync(join(here, "entry.jpg"), join(out, "entry.png"));
