export class SolanaClient {
  rpc?: string;

  constructor(rpc?: string) {
    this.rpc = rpc || 'https://api.devnet.solana.com';
  }

  async sendTxWithProof(proof: any) {
    // In production, construct a proper Solana transaction.
    // Here we simulate sending the proof as instruction data.
    return {
      success: true,
      rpc: this.rpc,
      proofPreview: typeof proof === 'string' ? proof.slice(0, 64) : JSON.stringify(proof).slice(0, 64)
    };
  }
}
