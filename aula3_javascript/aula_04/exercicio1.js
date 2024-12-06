//Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro número
// deve ser menor do que o segundo número. Caso contrário, deve ser exibida 
//uma mensagem na tela informando que o intervalo é inválido e sair do programa. 
//No intervalo informado, mostre na tela todos os números que são 
//múltiplos de 3 e 5. Veja os exemplos abaixo:

const leia = require("readline-sync")

let n1 = leia.questionInt("Digite o primeiro numero: ")
let n2 = leia.questionInt("Digite o segundo numero: ")

let multiplo = 0

if (n1 > 0 && n2 > 0 && n1 <= n2) {
    console.log(`No intervalo entre ${n1} e ${n2}: `)

    for (let i = n1; i <= n2; i++) {
        multiplo = n1++

        if (multiplo % 3 == 0 && multiplo % 5 == 0) {
            console.log(`${multiplo} é múltiplo de 3 e 5`)
        }
    }
} else if (n1 < 0 && n2 < 0 && n1 <= n2) {

    for (let i = n1; i <= n2; i++) {
        multiplo = n1++

        if (multiplo % 3 == 0 && multiplo % 5 == 0) {
            console.log(`${multiplo} é múltiplo de 3 e 5`)
        }
    }
}
else {
    console.log("Intervalo inválido!")
}