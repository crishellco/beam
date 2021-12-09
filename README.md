![Build](https://github.com/crishellco/beam/workflows/Build/badge.svg)
[![codecov](https://codecov.io/gh/crishellco/beam/branch/master/graph/badge.svg?token=M7N86U5GF7)](https://codecov.io/gh/crishellco/beam)
[![Maintainability](https://api.codeclimate.com/v1/badges/b3806bbadbec2ed40c08/maintainability)](https://codeclimate.com/github/crishellco/beam/maintainability)

# Beam

A simple event bus.

- [Getting Started](#getting-started)
  - [Install Package](#install-package)
- [Usage](#usage)
- [API](#api)
  - [Methods](#methods)
    - [beam.emit](#beamemit)
    - [beam.debouncedEmit](#beamdebouncedemit)
    - [beam.on](#beamon)
    - [beam.once](#beamonce)
    - [beam.off](#beamoff)
    - [beam.removeAllListeners](#beamremovealllisteners)
    - [beam.listeners](#beamlisteners)
- [Development](#development)
  - [Build Dist](#build-dist)
  - [Test](#test)
- [How to Contribute](#how-to-contribute)
  - [Pull Requests](#pull-requests)
- [License](#license)

## Getting Started

### Install Package

```bash
yarn add @crishellco/beam
# or
npm i @crishellco/beam
```

## Usage

```javascript
import beam from '@crishellco/beam';

const bus = beam();

bus.emit('submitted');
```

## API

### Methods

#### beam.emit

Emits an event.

`beam.emit(type: string, payload?: {})`

#### beam.debouncedEmit

Returns a debounced emit function. Useful when it is undesirable to emit the same event many times in a short period of time.

`beam.debouncedEmit(delay: number, type: string): (payload) => {}`

#### beam.on

Subscribes to an event.

`beam.on(type: string, listener: function)`

Also subscribes to all events

`beam.on('*', listener: function)`

#### beam.once

Subscribes to an event once.

`beam.once(type: string, listener: function)`

#### beam.off

Unsubscribes to an event.

`beam.off(type: string, listener: function)`

#### beam.removeAllListeners

Removes all listeners on a given bus.

`beam.removeAllListeners()`

#### beam.listeners

Returns all registered listeners, grouped by event type.

`beam.listeners()`

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

1. Fork the repository
2. Create a new branch for each feature or improvement
3. Send a pull request from each feature branch to the **develop** branch

## License

[MIT](http://opensource.org/licenses/MIT)
  