function cardValidator(number) {
  if (number === undefined) {
    return 'Erro: não há parâmetro';
  }
  if (typeof number === 'number') {
    return isValidCard(number);
  }
  if (typeof number === 'string') {
    if (number.toString().match(/[\d]*[-]+[\d]*/)) {
      return 'Não aceita número com dígito';
    } else {
      return 'Não aceita string';
    }
  }
}

const isValidCard = number => {
  const invertedCardNumberArray = number.toString().split('').reverse().map(n => parseInt(n));
  const doubledCardNumber = doubleEverySecondDigit(invertedCardNumberArray);
  const sumCardDigits = doubledCardNumber.reduce((sum, n) => sum + n, 0);

  const result = (sumCardDigits % 10 === 0) ? true : false;
  return result;
};

const doubleEverySecondDigit = array => array.map((n, index) => {
  if (index % 2 !== 0) 
    n *= 2;
    if (n > 9) n -=9;
  return n;  
});

module.exports.cardValidator = cardValidator;
