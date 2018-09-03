/* global describe, it */

const chai = require('chai');
const index = require('../index.js');
const cardValidator = index.cardValidator;
const expect = chai.expect;

describe('cardValidator()', () => {
  it('Deveria retornar true para o número 36490102462661', () => {
    expect(cardValidator(36490102462661)).to.equal(true);
  });
  it('Deveria retornar false para o número 26490102462661', () => {
    expect(cardValidator(26490102462661)).to.equal(false);
  });
  it('Deveria retornar erro para parâmetro vazio', () => {
    expect(() => cardValidator()).to.throw('nenhum parâmetro foi informado');
  });
  it('Deveria retornar erro para uma string', () => {
    expect(() => cardValidator('esta é uma string')).to.throw('o parâmetro não aceita string');
  });
  it('Deveria retornar erro para número com um único dígito', () => {
    expect(() => cardValidator(3)).to.throw('o número do cartão precisa ter mais de um dígito');
  });
});