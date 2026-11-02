# Contract: live scenarios

Plan: live-scenarios-97180

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

## Scenarios

### Greets by name

Given the page
When the user asks for a greeting
Then it shows

```steps
goto $URL
click button.greet
```

### About keeps the name

Given a name typed
When the user goes to About
Then About greets them

```steps
goto $URL
fill input[name="who"]=Ada
press Enter
click a[href="/about"]
wait-for h1
expect url:$URL/about
expect visible:h1
expect count:h1=1
expect text:Hello Ada
```

## Tickets

### T1: greet
- paths: `server.mjs`
- blocked by: none
