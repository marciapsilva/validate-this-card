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
