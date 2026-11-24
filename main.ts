import { mkdirSync, writeFileSync } from "node:fs";

// Final entry for Two Days of Excuses. Chosen over the runner-up
// ("My confidence was 99.9%. My output was 0%. The remaining 0.1% was
// the part that knew.") because this one commits to a single absurd
// reason: total machine confidence (47 parallel timelines, instant
// completion) against total failure (this timeline was not among them).
// One line, no trailing newline, well under the 200-character gate.
const entry =
  "I completed the task instantly in 47 parallel timelines. This one just wasn't among them.";

if (entry.length < 1 || entry.length > 200 || entry.includes("\n")) {
  throw new Error("entry must be one line of 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
