import { runProver } from './prover';
import { verifyProofClientSide } from './verifier';
import { PROGRAM_ID } from './program-config';
import { Multer } from '@multer/core';

async function main() {
  console.log('Program ID (example):', PROGRAM_ID);

  const proof = await runProver(42);
  console.log('Generated proof (hex):', proof);

  const ok = verifyProofClientSide(proof);
  console.log('Client-side verification:', ok);

  const client = new Multer();
  const res = await client.sendWithProof(proof, { programId: PROGRAM_ID, simulateOnChain: true });
  console.log('Simulated on-chain result:', res);

  if (res.signature) {
    // Solscan URL for devnet/mainnet differs; this is a template pointing to Solscan transaction view
    const solscan = `https://solscan.io/tx/${res.signature}?cluster=devnet`;
    console.log('Solscan (simulated) URL:', solscan);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
