const cardValidator = (number) => { 
  if (number === undefined) {
    throw new Error('missing argument');
  } else if (typeof number === 'string') {
    throw new Error('this function does not accept string as argument');
  } else if (number.toString().length < 2) {
    throw new Error('argument must have more than one digit');
  } else if (number.toString().match(/\d+[.]\d+/)) {
    throw new Error('this function only accepts an integer as argument');
  } else {
    return isValidCard(number);
  }
};

const isValidCard = number => {
  const invertedCardNumberArray = number.toString().split('').reverse().map(n => parseInt(n));
  const doubledCardNumber = doubleEverySecondDigit(invertedCardNumberArray);
  const sumCardDigits = doubledCardNumber.reduce((sum, n) => sum + n, 0);

  const result = (sumCardDigits % 10 === 0) ? true : false;
  return result;
};

const doubleEverySecondDigit = array => array.map((n, index) => {
  if (index % 2 !== 0) { 
    n *= 2;
    if (n > 9) n -= 9;
  }
  return n;  
});

module.exports.cardValidator = cardValidator;
