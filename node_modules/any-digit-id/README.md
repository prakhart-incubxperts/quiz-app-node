# Any Digit Id Generator

# What is this?
This npm package helps to generate any number of digit or characters random id. It's does not support any symbols or special characters.

# How to install?
```javascript
npm i any-digit-id --save
yarn add any-digit-id
```

# How to use?
```javascript

// commonjs
const anyDigitId = require('any-digit-id');

// or modulejs
import anyDigitId from 'any-digit-id';

const randomId = anyDigitId() // By default it's generate and return a 6 digit alpha numeric random id.
// randomId = Ab1hB8

// or
const options = {digit: 10, type: 'capitalLetters', prefix: 'EIS', suffix: 'XX'}
const randomId = anyDigitId(options);
// randomId = EISKHJNJXX

const randomId = anyDigitId({digit: 8, type: 'numbers'});
// randomId = 54236087

```

# Defaults
```javascript

anyDigitId() or anyDigitId({}) // both are same

// options by default are
{ 
digit: 6,
type: "alphaNumeric", 
prefix: "",
suffix: ""
}

// all type values are
"alphaNumeric", // combinations of A-Z, a-z and 0-9 (Defult)
"capitalLetters", // combinations of A-Z
"smallLetters", // combinations of a-z
"numbers", // combinations of 0-9
"onlyLetters", // combinations of A-Z and a-z
```