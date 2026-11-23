import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Laugh Sprint (make.fun): one original funny line, at most
// 200 characters, a light take on everyday life. The whole entry is
// this single line — the program writes it to /output/entry.txt.
//
// The line is a plain constant, so every run writes byte-identical
// output. No trailing newline: the file holds exactly the line, 131
// characters, inside the 1-200 gate.
const LINE =
  "My phone dies at 1% like it's making a point, and I respect it, nothing else in my life has ever committed to a deadline that hard.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
