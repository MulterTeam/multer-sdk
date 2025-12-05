import crypto from 'crypto';

export const sha256 = (input: string) =>
  crypto.createHash('sha256').update(input).digest('hex');

export const base58Encode = (input: Buffer) => {
  // lightweight base58 using bs58 if available; fallback to hex
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const bs58 = require('bs58');
    return bs58.encode(input);
  } catch (e) {
    return input.toString('hex');
  }
};

export const solscanTxUrl = (signature: string, cluster: 'devnet' | 'mainnet' | 'testnet' = 'devnet') =>
  `https://solscan.io/tx/${signature}?cluster=${cluster}`;

export const solscanProgramUrl = (programId: string, cluster: 'devnet' | 'mainnet' | 'testnet' = 'devnet') =>
  `https://solscan.io/account/${programId}?cluster=${cluster}`;
