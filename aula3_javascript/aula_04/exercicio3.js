//Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), 
//via teclado e mostre na tela o total de pessoas cuja idade seja menor que 21 anos e o total de pessoas cuja idade, 
//seja maior que 50 anos. A leitura dos dados deve ser finalizada ao digitar uma idade negativa. Veja o exemplo abaixo:
const leia = require("readline-sync")

let idade,
    menorDe21 = 0,
    maiorDe50 = 0

    idade = leia.questionInt("Digite uma idade: ")

while (idade > 0) {

    if (idade<21) {
        menorDe21++
    } else if(idade>50){
        maiorDe50++
    }
    idade = leia.questionInt("Digite uma idade: ")

}

console.log(`Total de pessoas menores de 21 anos: ${menorDe21}`)
console.log(`Total de pessoas maiores de 50 anos: ${maiorDe50}`)