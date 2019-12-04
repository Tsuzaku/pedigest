import { MyBoolPipe } from './my-bool.pipe';

describe('MyBoolPipe', () => {
  it('create an instance', () => {
    const pipe = new MyBoolPipe();
    expect(pipe).toBeTruthy();
  });
});
