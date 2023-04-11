/*
ATIVIDADE
*subtração
*multiplicação
*divisao
*/

const {calculadora} = require('./calculadora');

test('soma de 2 numeros', () => {
    expect(calculadora.soma(9, 2)).toBe(11);
});

test('subtracao de 2 numeros', () => {
    expect(calculadora.subtracao(9, 2)).toBe(7);
});

test('multiplicacao de 2 numeros', () => {
    expect(calculadora.multiplicacao(9, 2)).toBe(18);
});

test('divisao de 2 numeros', () => {
    expect(calculadora.divisao(10, 2)).toBe(5);
});