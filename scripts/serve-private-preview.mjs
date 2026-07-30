import { createReadStream } from "node:fs"
import { stat } from "node:fs/promises"
import http from "node:http"
import os from "node:os"
import path from "node:path"

const host = "127.0.0.1"
const port = Number(process.env.PRIVATE_PREVIEW_PORT ?? 8081)
const root = path.join(os.tmpdir(), "researchnotes-quartz-private-site")
const basePrefix = "/notes"

const mime = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".map", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".webp", "image/webp"],
  [".xml", "application/xml; charset=utf-8"],
])

async function resolveRequest(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0])
  const withoutBase =
    decoded === basePrefix
      ? "/"
      : decoded.startsWith(`${basePrefix}/`)
        ? decoded.slice(basePrefix.length)
        : decoded
  const relative = withoutBase.replace(/^\/+/, "")
  const candidate = path.resolve(root, relative)
  if (!candidate.startsWith(root + path.sep) && candidate !== root) return null

  for (const target of [
    candidate,
    path.join(candidate, "index.html"),
    `${candidate}.html`,
  ]) {
    try {
      const info = await stat(target)
      if (info.isFile()) return target
    } catch {}
  }
  return null
}

http
  .createServer(async (request, response) => {
    const file = await resolveRequest(request.url ?? "/")
    if (!file) {
      response.writeHead(404, { "content-type": "text/plain; charset=utf-8" })
      response.end("404")
      return
    }
    response.writeHead(200, {
      "content-type": mime.get(path.extname(file)) ?? "application/octet-stream",
      "cache-control": "no-store",
    })
    createReadStream(file).pipe(response)
  })
  .listen(port, host, () => {
    console.log(`Private preview: http://${host}:${port}${basePrefix}/`)
    console.log("This server is bound to localhost only. Press Ctrl+C to stop.")
  })
