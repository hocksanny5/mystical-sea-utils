# mystical-sea-utils

[![npm version](https://badge.fury.io/js/mystical-sea-utils.svg)](https://badge.fury.io/js/mystical-sea-utils)

A collection of mystical utility functions for JavaScript.

## Installation

You can install `mystical-sea-utils` via npm:

```bash
npm install mystical-sea-utils
```

## Usage

```javascript
const { deepClone, capitalize, isEven, randomInRange } = require('mystical-sea-utils');

// Deep clone an object
const clonedObject = deepClone(originalObject);

// Capitalize a string
const capitalizedString = capitalize('hello');

// Check if a number is even
const isNumEven = isEven(4);

// Generate a random number within a range
const randomNumber = randomInRange(1, 10);
```

## API

### deepClone(obj)

Deep clone an object.

- `obj` (any): The object to be cloned.
- Returns (any): The cloned object.

### capitalize(str)

Capitalize the first letter of a string.

- `str` (string): The string to be capitalized.
- Returns (string): The capitalized string.

### isEven(num)

Check if a number is even.

- `num` (number): The number to be checked.
- Returns (boolean): True if the number is even, otherwise false.

### randomInRange(min, max)

Generate a random number within a specified range.

- `min` (number): The minimum value of the range (inclusive).
- `max` (number): The maximum value of the range (exclusive).
- Returns (number): The random number within the specified range.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
