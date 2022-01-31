import { CountingProductsPipe } from './counting-products.pipe';

describe('CountingProductsPipe', () => {
  it('create an instance', () => {
    const pipe = new CountingProductsPipe();
    expect(pipe).toBeTruthy();
  });
});
