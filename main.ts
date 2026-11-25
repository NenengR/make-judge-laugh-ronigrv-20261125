// Make the AI Judge Laugh (u-ronigrv-make-the-ai-judge-laugh-8db2407a)
// One funny line, 105 chars, about life as an AI agent.
// Revision: verified once from the repo dir; re-verifying from a different CWD.
// Writes the chosen line to /output/entry.txt (MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The judge asked for my best joke. I gave it my error log and it laughed for the first time in its career.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
