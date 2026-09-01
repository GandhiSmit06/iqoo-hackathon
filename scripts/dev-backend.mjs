import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve, join } from "node:path";
import process from "node:process";

const rootDir = process.cwd();
const backendDir = resolve(rootDir, "backend", "backend");

// Look for python in venv first, then system PATH
const venvWindows = join(backendDir, ".venv", "Scripts", "python.exe");
const venvPosix = join(backendDir, ".venv", "bin", "python");

let pythonCmd = "python";
if (process.platform === "win32" && existsSync(venvWindows)) {
  pythonCmd = venvWindows;
} else if (existsSync(venvPosix)) {
  pythonCmd = venvPosix;
}

console.log("\x1b[36m[Backend]\x1b[0m Starting ProtoPatch Django API Server on http://localhost:8000 ...");
console.log(`\x1b[36m[Backend]\x1b[0m Using Python: ${pythonCmd}`);

const child = spawn(pythonCmd, ["manage.py", "runserver", "0.0.0.0:8000"], {
  cwd: backendDir,
  stdio: "inherit",
  env: {
    ...process.env,
    PYTHONUNBUFFERED: "1",
  },
});

child.on("error", (err) => {
  console.error("\x1b[31m[Backend ERROR]\x1b[0m Failed to start Django server:", err.message);
  process.exit(1);
});

child.on("exit", (code) => {
  if (code !== 0 && code !== null) {
    console.log(`\x1b[33m[Backend]\x1b[0m Server exited with code ${code}`);
  }
  process.exit(code ?? 0);
});

process.on("SIGINT", () => {
  child.kill("SIGINT");
});
process.on("SIGTERM", () => {
  child.kill("SIGTERM");
});
