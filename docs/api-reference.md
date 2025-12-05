# API Reference

## `@multer/core` API

- `Multer` class
  - `prove(input)` — Generate a ZK proof using the runtime
  - `sendWithProof(proof)` — Send proof as a Solana transaction payload

## `@multer/zk-runtime`

- `ZKRuntime` class
  - `generateProof(payload)` — returns a hex-encoded proof string
