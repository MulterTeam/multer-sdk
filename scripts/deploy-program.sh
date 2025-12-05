#!/usr/bin/env bash
set -euo pipefail

echo "Deploy Solana program (requires Solana CLI and keypair)"
if [ -z "${SOLANA_KEYPAIR+x}" ]; then
  echo "Please set SOLANA_KEYPAIR environment variable to your keypair file"
  exit 1
fi

echo "Building Solana program..."
pushd packages/solana-program
cargo build-bpf || cargo build
popd

echo "Deploy step is environment-specific. Use Solana CLI to deploy the produced .so file."
