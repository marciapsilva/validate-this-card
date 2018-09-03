# Validate This Card v1.1.3

**A função desta biblioteca é informar se o número de um cartão de crédito é válido.** 

Seguindo o algoritmo de Luhn, retorna `true` se o número de cartão de crédito informado for válido e `false` se não for válido.

## Instalação

Após instalar o npm em seu computador (mais informações [aqui](https://www.npmjs.com/get-npm), digite o seguinte código em seu terminal:

```
$npm install validate-this-card
```

## Exemplo de uso

No Node.js, digitar:

```
const lib = require('validate-this-card')
lib.cardValidator(36490102462661);
//true
```

## Roadmap

#### Versão 2.0.0 (sem previsão)
- Aceita mais de um número de cartão de crédito como argumento da função. 
- README em inglês.

#### Versão 1.0.0 (wip)

- Retorna se um número de cartão de crédito é válido ou não. 

## Project Github

[Validate This Card](https://github.com/marciapsilva/validate-this-card)