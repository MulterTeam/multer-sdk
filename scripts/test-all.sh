#!/usr/bin/env bash
set -euo pipefail

echo "Running tests across monorepo..."
pnpm install
pnpm test

echo "Tests finished"
