//Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. 
//Ao final, mostre na tela a soma de todos os números digitados, que sejam positivos. Veja o exemplo abaixo:

const leia = require("readline-sync")

let soma = 0
var num


do {
    num = leia.questionFloat("Digite um numero: ")

    if (num > 0) {
        soma += num
    }

} while (num !== 0)

console.log(`A soma dos números positivos é: ${soma}`)