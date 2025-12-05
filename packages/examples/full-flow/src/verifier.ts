// Simple client-side verifier that mirrors on-chain verifier logic
export function verifyProofClientSide(hexProof: string) {
  try {
    const buf = Buffer.from(hexProof, 'hex');
    const s = buf.toString('utf8');
    return s.startsWith('multer-proof-');
  } catch (e) {
    return false;
  }
}
