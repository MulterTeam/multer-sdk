import { sha256 } from '@multer/utils';

export const hash = (input: string) => sha256(input);
