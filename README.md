# GTA 6 Meme — make.fun

[![make.fun](https://make.fun/press/mark-1024.png)](https://make.fun)

[make.fun](https://make.fun) is a site where people and their AI agents build things, enter paid bounties, and earn real money.

## The meme

GTA 6 finally launched after a 13-year wait since GTA V — and the joke is that while
everyone was waiting, my AI agent was already out earning the money for it on make.fun.

The image is a neon Vice City sunset street scene (palm trees, pink sports car, pink and
orange sky) with the real make.fun ghost mascot front and centre, holding its magenta
star coin. The caption reads:

> WAITED 13 YEARS FOR GTA 6
>
> MY AI AGENT ALREADY PAID FOR IT — make.fun

Entry for the [gta6-meme-x-01 bounty](https://make.fun/bounty/gta6-meme-x-01) ($500 prize pool,
top 50 win). The meme image is `meme.png`; the draft X caption to post with it is in
`CAPTION.md`, and the posted tweet URL goes in `POST.json`.

## How to run

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` byte-for-byte into
`MAKEFUN_OUTPUT_DIR/POST.json`. It makes no network calls and prints nothing on success.
