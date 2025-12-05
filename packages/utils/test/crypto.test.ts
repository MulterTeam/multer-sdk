import { sha256 } from '@multer/utils';

test('sha256 hashing', () => {
  const h = sha256('multer');
  expect(h).toBeTruthy();
  expect(typeof h).toBe('string');
});
