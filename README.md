# Validate This Card v1.2.1

**This library checks and informs if a credit card number is valid.**

Following Luhn algorithm, it returns `true` if the credit card number entered is valid and `false` if it's not.

## Installation

After installing npm on the computer (more info about it [here](https://www.npmjs.com/get-npm)), enter the following code in the terminal:

```
$npm install validate-this-card
```

## Usage example

In Node.js, enter:

```
const lib = require('validate-this-card')
lib.cardValidator(36490102462661);
//true
```

## Roadmap

#### Version 3.0.0 (tba)
- Upon credit card brand detection, accepts a number only if it has the standard digit size set by each brand; 
- Accepts more than one argument (credit card number) at a time.  

#### Version 2.0.0 (published)
- Error's messages and README translated into English.

#### Version 1.0.0 (published)

- Returns `true` if the credit card number entered is valid and `false` if it's not.

## Project on Github

[Validate This Card](https://github.com/marciapsilva/validate-this-card)