// JS binding that falls back when the wasm artifact isn't available.
let wasm: any = undefined;

try {
  // When wasm is built, the generated pkg will expose functions.
  // Dynamic import keeps the package usable even if wasm isn't present.
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  wasm = require('../pkg/zk_runtime_bg.wasm');
} catch (e) {
  // noop - fallback below
}

export class ZKRuntime {
  async generateProof(payload: any) {
    if (wasm && typeof wasm.generate_proof === 'function') {
      const result = wasm.generate_proof(payload.value);
      // result may be a Uint8Array
      return Buffer.from(result).toString('hex');
    }

    // Fallback: deterministic, non-cryptographic proof string
    const proof = `multer-proof-${payload.value}`;
    return Buffer.from(proof).toString('hex');
  }
}
