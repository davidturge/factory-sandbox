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
