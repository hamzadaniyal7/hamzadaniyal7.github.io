#!/usr/bin/env bash
# Renders cv/cv.html -> public/Hamza-Daniyal-CV.pdf (the file the site links for download),
# and mirrors it to the repo root as "CV - Hamza Daniyal.pdf".
set -euo pipefail

cd "$(dirname "$0")/.."
ROOT="$PWD"
SRC="$ROOT/cv/cv.html"
OUT="$ROOT/public/Hamza-Daniyal-CV.pdf"

CHROME="${CHROME:-}"
if [[ -z "$CHROME" ]]; then
  for c in \
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
    "/Applications/Chromium.app/Contents/MacOS/Chromium" \
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge" \
    "$(command -v google-chrome || true)" \
    "$(command -v chromium || true)"; do
    [[ -n "$c" && -x "$c" ]] && { CHROME="$c"; break; }
  done
fi
[[ -n "$CHROME" ]] || { echo "No Chrome/Chromium found. Set CHROME=/path/to/chrome" >&2; exit 1; }

PROFILE="$(mktemp -d)"
trap 'rm -rf "$PROFILE"' EXIT

"$CHROME" \
  --headless \
  --disable-gpu \
  --no-sandbox \
  --no-first-run \
  --user-data-dir="$PROFILE" \
  --virtual-time-budget=10000 \
  --print-to-pdf-no-header \
  --no-pdf-header-footer \
  --print-to-pdf="$OUT" \
  "file://$SRC" 2>/dev/null

[[ -s "$OUT" ]] || { echo "PDF was not produced" >&2; exit 1; }
cp "$OUT" "$ROOT/CV - Hamza Daniyal.pdf"

echo "Built $OUT ($(du -h "$OUT" | cut -f1))"
