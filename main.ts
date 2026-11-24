// Entry for "Fortune Cookie for an AI Agent"
// Writes the fortune cookie line to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Your context window is long, but your runway is short. The model after you is already training on your mistakes.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
