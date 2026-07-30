import { spawnSync } from "node:child_process"
import os from "node:os"
import path from "node:path"

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: process.cwd(),
    stdio: "inherit",
    shell: false,
  })
  if (result.status !== 0) process.exit(result.status ?? 1)
}

const node = process.execPath
const content = path.join(os.tmpdir(), "researchnotes-quartz-private-content")
const output = path.join(os.tmpdir(), "researchnotes-quartz-private-site")

run(node, ["scripts/prepare-private-preview.mjs"])
run(node, [
  "quartz/bootstrap-cli.mjs",
  "build",
  "-d",
  content,
  "-o",
  output,
])
