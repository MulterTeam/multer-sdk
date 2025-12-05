import { Multer } from '@multer/core';

async function main() {
  const client = new Multer();

  const proof = await client.prove({ value: 42 });
  console.log('Generated proof:', proof);

  const result = await client.sendWithProof(proof);
  console.log('Tx Result:', result);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
