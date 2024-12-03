//Elabore um algoritmo que leia 4 notas (números reais) de um participante 
//e exiba na tela a média final do participante. Veja o exemplo abaixo:

const leia = require("readline-sync")

let n1 = leia.questionFloat("Digite a primeira nota: ")
let n2 = leia.questionFloat("Digite a segunda nota: ")
let n3 = leia.questionFloat("Digite a terceira nota: ")
let n4 = leia.questionFloat("Digite a quarta nota: ")

let media = (n1 + n2 + n3 + n4) / 4

console.log(`A média final é de: ${media.toFixed(1)}`)