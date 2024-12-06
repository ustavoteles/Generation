//Escreva um algoritmo, que leia 10 números inteiros via teclado e mostre na tela quantos números são pares e 
//quantos número são ímpares. Veja o exemplo abaixo:

const leia = require("readline-sync")

let num,
    par = 0,
    impar = 0

    for(let i=1; i<=10; i++){
        num = leia.questionInt(`Digite o ${i} numero: `)

        if(num % 2 === 0 ){
            par++
        } else{
            impar++
        }
    }

    console.log(`Total de números Pares: ${par}`)
    console.log(`Total de números Ímpares: ${impar}`)