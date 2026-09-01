import { spawn } from "node:child_process";
import process from "node:process";

console.log("\x1b[35m====================================================\x1b[0m");
console.log("\x1b[35m🚀 Launching ProtoPatch Full-Stack (Backend + Frontend)\x1b[0m");
console.log("\x1b[35m====================================================\x1b[0m");

const backend = spawn("node", ["scripts/dev-backend.mjs"], {
  stdio: "inherit",
  env: process.env,
});

const frontend = spawn("node", ["scripts/with-app-env.mjs", "vite", "dev", "--host", "0.0.0.0", "--port", "8080"], {
  stdio: "inherit",
  env: process.env,
});

function cleanup() {
  try {
    backend.kill();
  } catch {}
  try {
    frontend.kill();
  } catch {}
  process.exit(0);
}

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);
process.on("exit", cleanup);

backend.on("error", (err) => console.error("[Backend Error]", err));
frontend.on("error", (err) => console.error("[Frontend Error]", err));
