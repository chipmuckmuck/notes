import { cp, mkdir, rm } from "node:fs/promises"
import os from "node:os"
import path from "node:path"

const projectRoot = process.cwd()
const publicContent = path.join(projectRoot, "content")
const privateContent = path.join(projectRoot, "private")
const previewContent = path.join(os.tmpdir(), "researchnotes-quartz-private-content")
const localResearch = path.join(previewContent, "01-本地研究工作")

await rm(previewContent, { recursive: true, force: true })
await mkdir(previewContent, { recursive: true })
await cp(publicContent, previewContent, { recursive: true })
await cp(privateContent, localResearch, { recursive: true })

console.log(`Prepared local-only preview content in ${previewContent}`)
