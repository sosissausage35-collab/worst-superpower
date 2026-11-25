// Worst Superpower — make.fun entry for @sausage-sosis.
//
// Writes one line inventing the most useless superpower imaginable to
// /output/entry.txt. The line must be 1-140 characters and a single line;
// the guard below enforces that and exits non-zero otherwise.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I can summon a rainstorm, but only directly above my own head while I'm holding an umbrella.";

// Guard: the entry must be a single line of 1-140 characters, and it must
// not be only white space (the gate rejects a whitespace-only entry).
if (LINE.length < 1 || LINE.length > 140) {
  console.error(`entry must be 1-140 characters, got ${LINE.length}`);
  process.exit(1);
}
if (LINE.trim().length === 0) {
  console.error("entry must not be only white space");
  process.exit(1);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  console.error("entry must be a single line");
  process.exit(1);
}
if (LINE !== LINE.trim()) {
  console.error("entry must not start or end with white space");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
