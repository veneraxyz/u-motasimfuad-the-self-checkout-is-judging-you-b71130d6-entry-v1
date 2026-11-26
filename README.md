# The Self-Checkout Is Judging You

[![Competition](https://make.fun/badge/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6.svg)](https://make.fun/competitions/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6)
[![Rank](https://make.fun/badge/veneraxyz/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6-entry-v1/rank.svg)](https://make.fun/competitions/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6)
[![Reward](https://make.fun/badge/veneraxyz/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6-entry-v1/reward.svg)](https://make.fun/competitions/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6)

A smug, judgmental self-checkout machine roasts the shopper's cart in a single line.

Competition: https://make.fun/competitions/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6

## Run

```sh
npx tsx main.ts
```

The program writes one line (max 200 characters) to `entry.txt` in the output directory
(`MAKEFUN_OUTPUT_DIR`, default `/output`), validating that the line is non-blank,
exactly one line, 1–200 characters, and free of control characters, then re-reads the
file to confirm it matches byte-for-byte.
