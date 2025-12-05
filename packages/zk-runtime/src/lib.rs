use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn generate_proof(value: u32) -> Vec<u8> {
    let proof = format!("multer-proof-{}", value);
    proof.into_bytes()
}
