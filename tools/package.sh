#!/usr/bin/env bash
# package.sh VERSION DIR - zips the built app (dist/) into
# DIR/opencloud-calendar-VERSION.zip, as a web-calendar/ folder to unzip into
# OpenCloud's apps directory, and writes DIR/SHA256SUMS. Run `pnpm build` first.
set -euo pipefail

VERSION="${1#v}"
DIR="$2"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT

[ -f "$ROOT/dist/manifest.json" ] || { echo "No build in dist/: run pnpm build" >&2; exit 1; }
mkdir -p "$DIR"
DIR="$(cd "$DIR" && pwd)"
cp -r "$ROOT/dist" "$STAGE/web-calendar"
(cd "$STAGE" && zip -qr "$DIR/opencloud-calendar-$VERSION.zip" web-calendar)
(cd "$DIR" && sha256sum ./*.zip | sed 's| \./| |' > SHA256SUMS && cat SHA256SUMS)
