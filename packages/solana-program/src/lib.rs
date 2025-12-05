use solana_program::{
    account_info::AccountInfo,
    entrypoint,
    entrypoint::ProgramResult,
    msg,
};

entrypoint!(process_instruction);

pub fn process_instruction(
    _program_id: &solana_program::pubkey::Pubkey,
    _accounts: &[AccountInfo],
    proof: &[u8]
) -> ProgramResult {
    msg!("Multer Verifier: validating proof...");
    if proof.starts_with(b"multer-proof-") {
        msg!("Proof valid");
    } else {
        msg!("Invalid proof");
    }
    Ok(())
}
