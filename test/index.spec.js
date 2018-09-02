const chai = require('chai');
const index = require("../index.js");
const cardValidator = index.cardValidator;
const expect = chai.expect;

describe('cardValidator()', () => {
  it('Deveria retornar true para o número 36490102462661', () => {
    expect(cardValidator(36490102462661)).to.equal(true);
  });
  it('Deveria retornar false para o número 26490102462661', () => {
    expect(cardValidator(26490102462661)).to.equal(false);
  });
  it('Deveria retornar "Erro: não há parâmetro" para parâmetro vazio', () => {
    expect(cardValidator()).to.equal('Erro: não há parâmetro');
  });
  it('Deveria retornar "não aceita string" para uma string', () => {
    expect(cardValidator('esta é uma string')).to.equal('Não aceita string');
  });
  it('Deveria retornar "não aceita número com dígito" para número com dígito', () => {
    expect(cardValidator('352352-24')).to.equal('Não aceita número com dígito');
  });
});

// describe('invertedCardNumberArray', () => {
//   it('Deveria retornar uma array invertida para um número válido', () => {
//     expect(invertedCardNumberArray(36490102462661)).to.equal([1, 6, 6, 2, 6, 4, 2, 0, 1, 0, 9, 4, 6, 3]);
//   });
// });

// describe('doubleEverySecondDigit', () => {
//   it('Deveria retornar cada número de index ímpar dobrado a partir de uma array de números', () => {
//     expect(doubleEverySecondDigit([1, 6, 6, 2, 6, 4, 2, 0, 1, 0, 9, 4, 6, 3])).to.equal([1, 3, 6, 4, 6, 8, 2, 0, 1, 0, 9, 8, 6, 6]);
//   });
//   it('Deveria retornar cada número de index ímpar dobrado a partir da constante invertedCardNumberArray', () => {
//     expect(doubleEverySecondDigit(invertedCardNumberArray)).to.equal([1, 3, 6, 4, 6, 8, 2, 0, 1, 0, 9, 8, 6, 6]);
//   });
// });

// describe('sumCardDigits', () => {
//   it('Deveria retornar uma soma de dígitos a partir de uma array de números', () => {
//     expect(sumCardDigits([1, 3, 6, 4, 6, 8, 2, 0, 1, 0, 9, 8, 6, 6])).to.equal(60);
//   });
//   it('Deveria retornar uma soma de dígitos a partir da constante doubledCardNumber', () => {
//     expect(sumCardDigits(doubledCardNumber)).to.equal(60);
//   });
// });
