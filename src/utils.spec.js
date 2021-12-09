import { debounce, get } from './utils';

jest.useFakeTimers();

describe('utils', () => {
  beforeEach(() => {});

  describe('get', () => {
    it('should get items in an object', () => {
      const obj = { food: { mx: ['tacos', 'nachos'] } };

      expect(get(obj, 'food')).toEqual(obj.food);
      expect(get(obj, 'food.mx')).toEqual(obj.food.mx);
      expect(get(obj, ['food', 'mx'])).toEqual(obj.food.mx);
      expect(get(obj, 'nothing')).toBeUndefined();
      expect(get(obj, 'nothing', 'default')).toBe('default');
    });
  });

  describe('debounce', () => {
    it('should debounce', () => {
      const delay = 500;
      const cb = jest.fn();
      const fn = debounce(cb, delay);

      for (let i = 0; i < 100; i++) {
        fn();
      }

      jest.runAllTimers();

      expect(cb).toBeCalledTimes(1);
    });
  });
});
