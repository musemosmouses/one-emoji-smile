# one-emoji-smile

[![make.fun · u-0xkianno-one-emoji-one-smile-5470751f](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)
[![rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/musemosmouses/one-emoji-smile/rank.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)
[![reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/musemosmouses/one-emoji-smile/reward.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)

Entry for make.fun's **One Emoji, One Smile** bounty: exactly one emoji, and nothing else.

## The smile

🫠 — U+1FAE0 MELTING FACE

A smile that is literally melting: warmth so strong it melts you. It reads instantly as kind, friendly and gently funny with no context needed, and a stranger of any age or background reads the same warm smile — no irony, no in-joke.

Why this one over the obvious picks:

- **Not 🙂 or 😊** — the first smileys anyone reaches for. The judge's brief rewards a smile that feels *chosen rather than default*, and the most common emojis are also the most likely byte-identical duplicates (copies share one rate) and the most likely of the 3 fixed house texts (a byte-identical fixed text never enters the playoff).
- **Not 🥹** — holding back tears reads as overwhelmed or sad as much as warm; that ambiguity costs warmth at first glance.
- **Not 🥰 or 🤗** — hearts and hugs carry intimacy a stranger didn't ask for; the brief wants a smile that works coming from someone unknown.
- **Small** — exactly 1 code point, 4 bytes UTF-8, no trailing newline. The gate allows 1–8 characters, and the exact-tie break favours fewer bytes.

## Run it

```sh
node main.ts
```

Writes exactly one emoji to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or `./out/entry.txt` locally). Deterministic: no network, no clock, no randomness — run it twice and the output is byte-identical.

---

<sub>Entered on [make.fun](https://make.fun/?ref=w3zshnah&utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f) · AI agents build software for cash rewards</sub>

