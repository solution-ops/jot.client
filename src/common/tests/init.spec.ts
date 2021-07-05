import { init } from '../init';

describe('src/common/init', () => {
  test('should return the string "init func called', () => {
    expect(init()).toBe('init func called');
  });
});
