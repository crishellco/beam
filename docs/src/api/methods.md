# Methods

## bus.emit

Emits an event.

```javascript
bus.emit(type: string, payload?: {})
```

## bus.debouncedEmit

Returns a debounced emit function. Useful when it is undesirable to emit the same event many times in a short period of time.

```javascript
bus.debouncedEmit(delay: number, type: string): (payload) => {}
```

## bus.on

Subscribes to an event.

```javascript
bus.on(type: string, listener: function)
```

Subscribes to all events.

```javascript
bus.on('*', listener: function)
```

## bus.once

Subscribes to an event once.

```javascript
bus.once(type: string, listener: function)
```

## bus.off

Unsubscribes to an event.

```javascript
bus.off(type: string, listener: function)
```

## bus.removeAllListeners

Removes all listeners on a given bus.

```javascript
bus.removeAllListeners()
```
