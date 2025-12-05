import { ZKRuntime } from '@multer/zk-runtime';
import { SolanaClient } from './solana';

export class Multer {
  zk: ZKRuntime;
  solana: SolanaClient;

  constructor(config?: { rpc?: string }) {
    this.zk = new ZKRuntime();
    this.solana = new SolanaClient(config?.rpc);
  }

  async prove(input: any) {
    return this.zk.generateProof(input);
  }

  async sendWithProof(proof: any) {
    return this.solana.sendTxWithProof(proof);
  }
}
