import { WILDCARD } from './constants';
import factory from './factory';

jest.useFakeTimers();

const event = 'event-1';
const payload = { foo: 'bar' };

let bus;

function init() {
  bus = factory();

  bus.removeAllListeners();
}

describe('bus', () => {
  it('should emit many times', () => {
    init();
    const listener = jest.fn();

    bus.on(event, listener);
    bus.emit(event);
    bus.emit(event, payload);
    expect(listener).toHaveBeenCalledTimes(2);
  });

  it('should handle on many times', () => {
    init();
    const listener = jest.fn();

    bus.on(event, listener);
    bus.emit(event, payload);
    bus.emit(event, payload);
    expect(listener).toHaveBeenCalledTimes(2);
  });

  it('should handle off', () => {
    init();
    const listener = jest.fn();

    bus.on(event, listener);
    bus.emit(event, payload);
    bus.off(event, listener);
    bus.emit(event, payload);
    expect(listener).toHaveBeenNthCalledWith(1, payload, event);
  });

  it('should handle off globally', () => {
    init();
    const listener = jest.fn();

    bus.on(event, listener);
    bus.emit(event, payload);
    bus.off(event);
    bus.off('another');
    bus.emit(event, payload);
    expect(listener).toHaveBeenNthCalledWith(1, payload, event);
  });

  it('should handle once', () => {
    init();
    const listener1 = jest.fn();
    const listener2 = jest.fn();

    bus.once(event, listener1);
    bus.on(event, listener2);
    bus.emit(event, payload);
    bus.emit(event, payload);
    bus.emit(event, payload);
    expect(listener1).toHaveBeenNthCalledWith(1, payload, event);
    expect(listener2).toHaveBeenCalledTimes(3);
  });

  it('should debounce emit', () => {
    const listener1 = jest.fn();
    const delay = 500;
    const debounced = bus.debouncedEmit(delay, event);

    bus.on(event, listener1);

    for (let i = 0; i < 100; i++) {
      debounced(payload);
    }

    jest.runAllTimers();

    expect(listener1).toHaveBeenCalledTimes(1);
  });

  it('should make two instances', () => {
    init();
    const secondBus = factory('internal');
    const listener1 = jest.fn();
    const listener2 = jest.fn();
    const listener3 = jest.fn();

    bus.on(event, listener1);
    bus.on(event, listener2);
    secondBus.on(event, listener2);
    secondBus.on(event, listener3);
    bus.emit(event, payload);
    secondBus.emit(event, payload);
    expect(listener1).toHaveBeenCalledTimes(1);
    expect(listener2).toHaveBeenCalledTimes(2);
    expect(listener3).toHaveBeenCalledTimes(1);
  });

  it('should handle wildcard event types', () => {
    init();
    const listener = jest.fn();

    bus.on(WILDCARD, listener);
    bus.emit('another', payload);
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('should remove all listeners', () => {
    init();
    const listener = jest.fn();

    bus.on(event, listener);
    bus.removeAllListeners();
    bus.emit(event, payload);
    expect(listener).toHaveBeenCalledTimes(0);
  });

  it('should return all listeners', () => {
    init();
    const listener = jest.fn();

    bus.on(event, listener);
    expect(Object.keys(bus.listeners)).toEqual([event]);
  });
});
