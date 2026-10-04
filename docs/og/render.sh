#!/usr/bin/env bash
# docs/og/og-card.html → public/og-tr.png, public/og-en.png (1200×630)
# Gereksinim: Google Chrome (macOS). Kullanım: bash docs/og/render.sh
set -euo pipefail
cd "$(dirname "$0")/../.."

CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
card="file://$PWD/docs/og/og-card.html"

for lang in tr en; do
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars \
    --window-size=1200,630 --virtual-time-budget=5000 \
    --screenshot="public/og-$lang.png" "$card?lang=$lang" 2>/dev/null
  echo "public/og-$lang.png"
done
