// Vamos verificar se um dado número digitado pelo usuário é par ou ímpar, negativo ou positivo.

// Solicita que o usuário insira um número
let numero = prompt('Digite um número:');
console.log('Número digitado:', numero);

// Condicional para verificar se a entrada é um número.
while (true) {
    numero = Number(numero);
    if (isNaN(numero)){
        numero = prompt('Entrada inválida! Por favor, digite um número.');}
     else {
        break;}
    }

alert(`Você digitou um número válido: ${numero}`);

// Verifica se o número é par ou ímpar
if (numero % 2 === 0) {
    alert(`O número ${numero} é par.`);
} else {
    alert(`O número ${numero} é ímpar.`);
}

// O operador % é usado para obter o resto da divisão entre dois números.
// Já o operador === é usado para comparar valores, verificando se são iguais em valor e tipo.

// Verifica se o número é positivo, negativo ou zero
if (numero > 0) {
    alert(`O número ${numero} é positivo.`);
} else if (numero < 0) {
    alert(`O número ${numero} é negativo.`);
} else {
    alert('O número é zero.');
}

// Neste caso, usamos os operadores > e < para comparar o número com zero e determinar se é positivo, negativo ou zero.
