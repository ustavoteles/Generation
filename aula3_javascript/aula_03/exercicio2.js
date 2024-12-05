//Escreva um algoritmo que leia um número inteiro via teclado e mostre 
//na tela uma mensagem indicando se este número é par ou ímpar e se o 
//número é positivo ou negativo. Veja os exemplos abaixo:

const leia = require("readline-sync")

let num1 = leia.questionInt("Digite um numero: ")

if(num1 == 0){
    console.log("O NUMERO INFORMADO É O ZERO")
}else if( num1 % 2 === 0 && num1 <= -1.0){
    console.log(`O NUMERO ${num1} É PAR E NEGATIVO!`)
}else if(num1 % 2 !== 0 && num1 <= -1.0){
    console.log(`O NUMERO ${num1} É ÍMPAR E NEGATIVO! `)
}else if(num1 % 2 === 0 && num1 > 0){
    console.log(`O NUMERO ${num1} É PAR E POSITIVO!`)
}else{
    console.log(`O NUMERO ${num1} É ÍMPAR E POSITIVO!`)
}