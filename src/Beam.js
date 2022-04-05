import { WILDCARD } from './constants';
import { debounce } from './utils';

export default class Beam {
  constructor() {
    this._listeners = new Map();
  }

  on(type, listener) {
    const listeners = this._listeners.get(type);

    if (listeners) {
      listeners.push(listener);
    } else {
      this._listeners.set(type, [listener]);
    }
  }

  off(type, listener) {
    const listeners = this._listeners.get(type);

    if (!listeners) return;

    if (listener) {
      listeners.indexOf(listener) > -1 && listeners.splice(listeners.indexOf(listener), 1);
    } else {
      this._listeners.set(type, []);
    }
  }

  once(type, listener) {
    const fn = (...args) => {
      listener(...args);
      this.off(type, fn);
    };

    this.on(type, fn);
  }

  emit(type, payload = {}) {
    const listeners = (this._listeners.get(type) || []).concat(this._listeners.get(WILDCARD) || []);

    if (listeners.length) {
      listeners.slice().map((listener) => {
        listener(payload, type);
      });
    }
  }

  debouncedEmit(delay, type) {
    return debounce((payload) => this.emit(type, payload), delay);
  }

  removeAllListeners() {
    this._listeners.clear();
  }

  get listeners() {
    return Object.fromEntries(this._listeners);
  }
}
