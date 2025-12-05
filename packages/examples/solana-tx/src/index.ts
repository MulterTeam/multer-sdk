import { Multer } from '@multer/core';

async function main() {
  const client = new Multer();

  const proof = await client.prove({ value: 123 });
  console.log('Generated proof:', proof);

  const tx = await client.sendWithProof(proof);
  console.log('Transaction simulation result:', tx);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
