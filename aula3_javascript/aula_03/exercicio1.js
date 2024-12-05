//Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima
// na tela se a soma de A + B é maior, menor ou igual a C.

const leia = require("readline-sync")

let variavelA = leia.questionInt("Digite o numero A: ")
let variavelB = leia.questionInt("Digite o numero B: ")
let variavelC = leia.questionInt("Digite o numero C: ")


if (variavelA + variavelB === variavelC) {
    console.log(`VALOR DE C = ${variavelC}`)
    console.log(`${variavelA} + ${variavelB} = ${variavelA + variavelB} = ${variavelC}`)
    console.log("A soma de A + B é igual a C")
} else if (variavelA + variavelB > variavelC) {
    console.log(`VALOR DE C = ${variavelC}`)
    console.log(`${variavelA} + ${variavelB} = ${variavelA + variavelB} > ${variavelC}`)
    console.log("A soma de A + B é maior do que C")
} else {
    console.log(`VALOR DE C = ${variavelC}`)
    console.log(`${variavelA} + ${variavelB} = ${variavelA + variavelB} < ${variavelC}`)
    console.log("A soma de A + B é menor do que C")
}