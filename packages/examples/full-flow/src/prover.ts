import { ZKRuntime } from '@multer/zk-runtime';

export async function runProver(value: number) {
  const zk = new ZKRuntime();
  const proof = await zk.generateProof({ value });
  return proof; // hex string
}
