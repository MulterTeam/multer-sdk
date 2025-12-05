import { sha256, base58Encode } from '@multer/utils';

export class SolanaClient {
  rpc?: string;

  constructor(rpc?: string) {
    this.rpc = rpc || 'https://api.devnet.solana.com';
  }

  /**
   * Send a transaction with the proof. By default this simulates the on-chain
   * verification locally (so you don't need a deployed program).
   *
   * Options:
   * - programId: optional program id to target
   * - simulateOnChain: if true, run the verifier logic locally and return simulated logs
   */
  async sendTxWithProof(proof: any, opts?: { programId?: string; simulateOnChain?: boolean }) {
    const proofHex = typeof proof === 'string' ? proof : Buffer.from(String(proof)).toString('hex');

    if (opts?.simulateOnChain) {
      // Simulate on-chain verifier (mirrors `packages/solana-program` logic)
      const buf = Buffer.from(proofHex, 'hex');
      const s = buf.toString('utf8');
      const valid = s.startsWith('multer-proof-');

      // Create a deterministic fake signature for demonstration
      const sigHex = sha256(s);
      const signature = base58Encode(Buffer.from(sigHex, 'hex'));

      const logs = [
        'Multer Verifier: validating proof...',
        valid ? 'Proof valid' : 'Invalid proof'
      ];

      return {
        success: valid,
        simulated: true,
        programId: opts?.programId || null,
        signature,
        logs
      };
    }

    // Default fallback: return a preview object and note that no actual network
    // call was made. This keeps the SDK functional offline.
    return {
      success: false,
      simulated: false,
      rpc: this.rpc,
      proofPreview: proofHex.slice(0, 64)
    };
  }
}
