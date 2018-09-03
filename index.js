const cardValidator = (number) => { 
  if (number === undefined) {
    throw new Error('nenhum parâmetro foi informado');
  } else if (typeof number === 'string') {
    throw new Error('o parâmetro não aceita string');
  } else if (number.toString().length < 2) {
    throw new Error('o número do cartão precisa ter mais de um dígito');
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
