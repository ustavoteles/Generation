//Elabore um algoritmo que leia quatro valores (n1, n2, n3, n4). 
//A seguir, calcule e mostre a diferença do produto entre n1 e n2 pelo produto 
//entre n3 e o n4. Veja os exemplos abaixo:

const leia = require("readline-sync")

let n1 = leia.questionInt("Digite o primeiro valor: ")
let n2 = leia.questionInt("Digite o segundo valor: ")
let n3 = leia.questionInt("Digite o terceiro valor: ")
let n4 = leia.questionInt("Digite o quarto valor: ")

let diferencaFinal = (n1 * n2) - (n3 * n4)

console.log(`A diferença é de: ${diferencaFinal}`)