//Com base na tabela abaixo, escreva um algoritmo
// que simule uma Calculadora simples. O programa 
//deverá ler dois números reais: numero1 e numero2, 
//e na sequência ler o Código da operação matemática 
//(número inteiro entre 1 e 4). A seguir, mostre na tela 
//o resultado da operação entre os 2 números. Caso o número 
//da operação esteja fora do intervalo entre 1 e 4, mostre a
// mensagem na tela Operação Inválida!

const leia = require("readline-sync")


console.log("|======CALCULADORA========|")
console.log("|  1 -       Soma         |")
console.log("|  2 -       Subtração    |")
console.log("|  3 -       Multiplicação|")
console.log("|  4 -       Divisão      |")
console.log("|=========================|")

let n1 = leia.questionFloat("Digite o primeiro numero: ")
let n2 = leia.questionFloat("Digite o segundo numero: ")

let codigo = leia.questionInt("Escolha a operacao voce deseja efetuar: ")

let total

switch (codigo) {
    case 1:
        console.log("Você selecionou SOMA")
        total = n1 + n2
        console.log(`${n1.toFixed(1)} + ${n2.toFixed(1)} = ${total.toFixed(1)}`)
        break
    case 2:
        console.log("Você selecionou SUBTRAÇÃO")
        total = n1 - n2
        console.log(`${n1.toFixed(1)} - ${n2.toFixed(1)} = ${total.toFixed(1)}`)
        break
    case 3:
        console.log("Você selecionou MULTIPLICAÇÃO")
        total = n1 * n2
        console.log(`${n1.toFixed(1)} * ${n2.toFixed(1)} = ${total.toFixed(1)}`)
        break
    case 4:
        console.log("Você selecionou DIVISÃO")
        total = n1 / n2
        console.log(`${n1.toFixed(1)} / ${n2.toFixed(1)} = ${total.toFixed(1)}`)
        break
    default:
        console.log("Operação Inválida")
        break
}

