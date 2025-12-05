import { Multer } from './multer';

test('multer basic flow', async () => {
  const client = new Multer();
  const proof = await client.prove({ value: 7 });
  expect(proof).toBeTruthy();
  const res = await client.sendWithProof(proof);
  expect(res).toHaveProperty('success', true);
});
