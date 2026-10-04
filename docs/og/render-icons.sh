#!/usr/bin/env bash
# docs/og/icon.html → public/apple-touch-icon.png (180, koyu zemin) ve public/favicon.ico (32, şeffaf)
set -euo pipefail
cd "$(dirname "$0")/../.."
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
icon="file://$PWD/docs/og/icon.html"
tmp="$(mktemp -d)"

"$CHROME" --headless=new --disable-gpu --hide-scrollbars --window-size=180,180 \
  --screenshot=public/apple-touch-icon.png "$icon?s=180" 2>/dev/null
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --window-size=32,32 \
  --default-background-color=00000000 --screenshot="$tmp/32.png" "$icon?s=32&bare" 2>/dev/null

# PNG'yi ICO kabına sar (Vista+ ICO, PNG içerik kabul eder)
python3 - "$tmp/32.png" public/favicon.ico <<'PY'
import struct, sys
png = open(sys.argv[1], 'rb').read()
header = struct.pack('<HHH', 0, 1, 1)
entry = struct.pack('<BBBBHHII', 32, 32, 0, 0, 1, 32, len(png), 6 + 16)
open(sys.argv[2], 'wb').write(header + entry + png)
PY
rm -rf "$tmp"
echo "public/apple-touch-icon.png public/favicon.ico"
