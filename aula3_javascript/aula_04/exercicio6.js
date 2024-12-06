//Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado.
// Ao final, mostre na tela a média de todos os números digitados, que sejam múltiplos de 3. Veja o exemplo abaixo:

const leia = require("readline-sync")

let num, soma = 0, contador = 0

do {
    if (num % 3 === 0) {
        soma += num
        contador++
    }
    num = leia.questionInt("Digite um numero: ")
} while (num !== 0)

console.log(`A média de todos os números múltiplos de 3 é: ${soma / contador}`)