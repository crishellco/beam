import { WILDCARD } from './constants';
import { debounce } from './utils';

export default function() {
  const allListeners = new Map();

  return {
    allListeners,
    on(type, listener) {
      const listeners = allListeners.get(type);

      if (listeners) {
        listeners.push(listener);
      } else {
        allListeners.set(type, [listener]);
      }
    },

    off(type, listener) {
      const listeners = allListeners.get(type);

      if (!listeners) return;

      if (listener) {
        listeners.indexOf(listener) > -1 && listeners.splice(listeners.indexOf(listener), 1);
      } else {
        allListeners.set(type, []);
      }
    },

    once(type, listener) {
      const fn = (...args) => {
        listener(...args);
        this.off(type, fn);
      };

      this.on(type, fn);
    },

    emit(type, payload = {}) {
      /**
       * TODO Confirm successful receipt
       */
      const listeners = (allListeners.get(type) || []).concat(allListeners.get(WILDCARD) || []);

      if (listeners.length) {
        listeners.slice().map(listener => {
          listener(payload, type);
        });
      }
    },

    debouncedEmit(delay, type) {
      return debounce(payload => this.emit(type, payload), delay);
    },

    removeAllListeners() {
      allListeners.clear();
    },

    listeners() {
      return Object.fromEntries(allListeners);
    },
  };
}
