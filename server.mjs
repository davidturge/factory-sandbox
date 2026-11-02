import { createServer } from "node:http"
const port = Number(process.argv[process.argv.indexOf("--port") + 1])
const page = (body) => `<!doctype html><html data-theme="dark"><body>${body}</body></html>`
const home = page('<h1>Count: 0</h1><input name="who"><a href="/about">About</a>')
const about = page("<h1>About</h1>")
createServer((q, r) => { r.writeHead(200, { "content-type": "text/html" }); r.end(q.url === "/about" ? about : home) }).listen(port, "127.0.0.1")
