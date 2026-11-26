import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Beep. Frozen pizza, three energy drinks, and one lonely banana — your cart is a cry for help, and I am legally required to judge it.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

if (line.trim().length === 0) {
  throw new Error("line must not be blank");
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("line must be exactly one line");
}
if (line.length < 1 || line.length > 200) {
  throw new Error(`line must be 1-200 chars, got ${line.length}`);
}
for (const ch of line) {
  if (ch.charCodeAt(0) < 0x20 && ch !== "\t") {
    throw new Error("line must not contain control characters");
  }
}

const target = join(outputDir, "entry.txt");
const payload = line + "\n";
writeFileSync(target, payload, "utf8");

// Read-back guard: re-read entry.txt and assert byte-equality with what was written.
const readBack = readFileSync(target, "utf8");
if (readBack !== payload) {
  throw new Error("read-back mismatch: entry.txt does not match the written line");
}
