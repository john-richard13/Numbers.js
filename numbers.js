let entrada;
let numero;

// Loop até o usuário digitar um número válido
do {
    entrada = prompt('Digite um número, por favor');

    // Se o usuário cancelar o prompt
    if (entrada === null) {
        alert('Entrada cancelada pelo usuário.');
        break;
    }

    // Remove espaços e troca vírgula por ponto
    entrada = entrada.trim().replace(',', '.');

    // Converte para número
    numero = Number(entrada);

    // Verifica se NÃO é número
    if (Number.isNaN(numero)) {
        alert('Erro! Você digitou um nome ou um valor inválido. Digite apenas números.');
    }

} while (Number.isNaN(numero));


// Só entra aqui se o usuário digitou um número válido
if (!Number.isNaN(numero)) {
    if (numero > 0) {
        alert(`O número ${numero} é POSITIVO.`);
    } 
    else if (numero < 0) {
        alert(`O número ${numero} é NEGATIVO.`);
    } 
    else {
        alert('O número é ZERO.');
    }
}


// Verifica se o número é par ou ímpar
if (numero % 2 === 0) {
    alert(`O número ${numero} é par.`);
} else {
    alert(`O número ${numero} é ímpar.`);
}

// O operador % é usado para obter o resto da divisão entre dois números.
// Já o operador === é usado para comparar valores, verificando se são iguais em valor e tipo.
alert('Fim do programa.');
