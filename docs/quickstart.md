# Quickstart

Install the SDK packages you need (example installs just core):

```
pnpm add @multer/core
```

Generate a proof and send a transaction:

```ts
import { Multer } from "@multer/core";

const client = new Multer();

const proof = await client.prove({ value: 42 });
const tx = await client.sendWithProof(proof);
console.log(tx);
```
