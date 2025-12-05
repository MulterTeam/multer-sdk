#!/usr/bin/env bash
set -euo pipefail

echo "Building wasm package using wasm-pack (requires wasm-pack installed)"
wasm-pack build --target web --out-dir pkg
