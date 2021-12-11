# Usage

## Factory

Create a new bus instance via the `factory`.

### Default instance

Zero-config and simplest use-case.

```javascript
import beam from '@crishellco/beam';

const bus = beam();

bus.emit('submitted');
```

### Named instance

Useful if you need multiple, isolated busses. 

```javascript
import beam from '@crishellco/beam';

const productsBus = beam('products');
const usersBus = beam('users');

productsBus.emit('add-to-cart');
usersBus.emit('register');

productsBus.on('add-to-cart', handleAddToCart);
productsBus.on('register', handleRegister); // <-- will this handler will never be called

usersBus.on('register', handleRegister);
usersBus.on('add-to-cart', handleAddToCart); // <-- will this handler will never be called
```

## Class

You can also create a new bus instance via the `Beam` class.

```javascript
import { Beam } from '@crishellco/beam';

const bus = new Beam();

bus.emit('submitted');
```
