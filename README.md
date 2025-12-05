# multer-sdk
![multer-sdk banner](public/multer-banner.jpg)
Zero-Knowledge Modular SDK for Solana DApps

Multer SDK provides:

- ZK Proof Generation (WASM)
- Solana Transaction Flow
- On-Chain Proof Verification
- Encryption Utilities
- Modular TypeScript + Rust Architecture

Install
```
pnpm add @multer/core
```

Quick Usage
```
import { Multer } from "@multer/core";

const client = new Multer();

const proof = await client.prove({ value: 42 });
const tx = await client.sendWithProof(proof);

console.log(tx);
```

Features

- Zero-Knowledge Runtime (WASM)
- Solana Program Verifier
- High-speed Transaction Assembler
- Modular System

Tech Stack

- TypeScript
- Rust
- WebAssembly
- Solana
- Turborepo
- Vitest
# multer-sdk
A next-generation infrastructure layer enabling developers to build high-performance Solana applications with ZK computation, modular APIs, and instant transaction pipelines. 
