// One Emoji, One Smile — entry program for make.fun
// bounty u-0xkianno-one-emoji-one-smile-5470751f.
//
// THE CHOICE: U+1FAE0 MELTING FACE.
//
// Why this one smile, against the judge's own brief (most important first):
//
// 1. Warm and friendly at first glance: a smiling face that is literally
//    melting. The read is instant — warmth so strong it melts you — kind,
//    friendly and gently funny, with no context needed.
// 2. Universal: a plain smiling face. No irony, no in-joke, no
//    culture-specific reference; a stranger of any age or background reads
//    the same warm smile.
// 3. Chosen rather than default: 🙂 and 😊 are the first smileys anyone
//    reaches for, so they fail the brief's "chosen, not default" test and
//    are also the most likely byte-identical duplicates (copies share one
//    rate) and the most likely of the 3 fixed house texts (a byte-identical
//    fixed text never enters the playoff). 🫠 is a deliberate pick that
//    still reads instantly.
// 4. Right for a stranger: no intimacy, no flirtation, no sarcasm — unlike
//    🥰 (hearts = intimate) or 🤗 (a hug from a stranger reads oddly).
// 5. Not 🥹: holding back tears reads as overwhelmed or sad as much as
//    warm, and that ambiguity costs warmth at first glance.
// 6. Small: exactly 1 code point, 4 bytes UTF-8, no trailing newline — the
//    gate allows 1–8 characters, and the exact-tie break favours fewer
//    bytes, so the file holds the emoji and nothing else.
//
// Deterministic by construction: no network, no clock, no randomness, no
// input. The same bytes come out on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The single emoji. Written as an escape so the source stays plain ASCII
// and no editor, diff or copy step can silently alter the character.
const EMOJI = "\u{1FAE0}"; // MELTING FACE

// The grader sets MAKEFUN_OUTPUT_DIR (its /output). Locally, fall back to
// ./out so the same command verifies the entry on this machine.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "out");

// Create the output directory if needed. Never remove or empty it first:
// the grader's /output is read-only for us and deleting it fails the run.
mkdirSync(outDir, { recursive: true });

// Write exactly the emoji — no trailing newline, no extra bytes. A newline
// would add a second character and an extra byte for nothing.
writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");

