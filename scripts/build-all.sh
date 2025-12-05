#!/usr/bin/env bash
set -euo pipefail

echo "Installing dependencies and building repository..."
pnpm install
pnpm build

echo "Build finished"
