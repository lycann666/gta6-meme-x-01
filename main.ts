import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const data = readFileSync(join(botDir, "POST.json"));
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "POST.json"), data);
