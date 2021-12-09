![Build](https://github.com/crishellco/beam/workflows/Build/badge.svg)
[![codecov](https://codecov.io/gh/crishellco/beam/branch/master/graph/badge.svg?token=M7N86U5GF7)](https://codecov.io/gh/crishellco/beam)
[![Maintainability](https://api.codeclimate.com/v1/badges/10d5790796ad8b2f166c/maintainability)](https://codeclimate.com/github/crishellco/beam/maintainability)

# Beam

A simple event bus.

*   [Getting Started](#getting-started)
    *   [Install Package](#install-package)
*   [Usage](#usage)
*   [API](#api)
    *   [Methods](#methods)
        *   [beam](#factory)
        *   [bus.emit](#busemit)
        *   [bus.debouncedEmit](#busdebouncedemit)
        *   [bus.on](#buson)
        *   [bus.once](#busonce)
        *   [bus.off](#busoff)
        *   [bus.removeAllListeners](#busremovealllisteners)
        *   [bus.listeners](#buslisteners)
*   [Development](#development)
    *   [Build Dist](#build-dist)
    *   [Test](#test)
*   [How to Contribute](#how-to-contribute)
    *   [Pull Requests](#pull-requests)
*   [License](#license)

## Getting Started

### Install Package

```bash
yarn add @crishellco/beam
# or
npm i @crishellco/beam
```

## Usage

Default instance.

```javascript
import beam from '@crishellco/beam';

const bus = beam();

bus.emit('submitted');
```

Named instance.

```javascript
import beam from '@crishellco/beam';

const usersBus = beam('users');

usersBus.emit('submitted');
```

Create an instance by directly using the `Beam` class.

```javascript
import { Beam } from '@crishellco/beam';

const bus = new Beam();

bus.emit('submitted');
```

## API

### Methods

#### beam <a id="factory"></a>

Returns a new bus instance.

`beam(instanceId?: string)`

#### bus.emit

Emits an event.

`bus.emit(type: string, payload?: {})`

#### bus.debouncedEmit

Returns a debounced emit function. Useful when it is undesirable to emit the same event many times in a short period of time.

`bus.debouncedEmit(delay: number, type: string): (payload) => {}`

#### bus.on

Subscribes to an event.

`bus.on(type: string, listener: function)`

Also subscribes to all events

`bus.on('*', listener: function)`

#### bus.once

Subscribes to an event once.

`bus.once(type: string, listener: function)`

#### bus.off

Unsubscribes to an event.

`bus.off(type: string, listener: function)`

#### bus.removeAllListeners

Removes all listeners on a given bus.

`bus.removeAllListeners()`

#### bus.listeners

Returns all registered listeners, grouped by event type.

`bus.listeners()`

## Development

### Build Dist

```bash
yarn build
```

### Test

```bash
yarn test
```

## How to Contribute

### Pull Requests

1.  Fork the repository
2.  Create a new branch for each feature or improvement
3.  Send a pull request from each feature branch to the **develop** branch

## License

[MIT](http://opensource.org/licenses/MIT)
