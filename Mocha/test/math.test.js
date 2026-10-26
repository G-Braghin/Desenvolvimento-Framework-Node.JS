// test/math.test.js
const assert = require('assert');
const soma = require('../math'); // Importa a função soma

// Grupo de testes para a função soma
describe('Função soma', function() {
  it('deve retornar 5 quando a soma de 2 e 3 é realizada', function() {
    assert.strictEqual(soma(2, 3), 5);
  });

  it('deve retornar -1 quando a soma de -2 e 1 é realizada', function() {
    assert.strictEqual(soma(-2, 1), -1);
  });

  it('deve retornar 0 quando a soma de 0 e 0 é realizada', function() {
    assert.strictEqual(soma(0, 0), 0);
  });
});
