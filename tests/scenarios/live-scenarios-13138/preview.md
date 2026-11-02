## Preview

- build: `npm run build`
- start: `node server.mjs $FIXTURE --port $PORT`
- url: `http://127.0.0.1:$PORT/`
- health: `GET /` answers 200
- fixture: a folder the Courier creates from the listing below, at `$FIXTURE`, before `start`

### Fixture

| path | content |
|---|---|
| `readme.md` | `# Title` |
