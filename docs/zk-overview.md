# ZK Overview

This document outlines the Multer ZK strategy and runtime flow.

- Circuits & Statement: Minimal example runtime returns a proof string.
- Runtime: Rust + wasm-bindgen produces a compact proof blob.
- Verification: On-chain Solana program checks proof prefix.
