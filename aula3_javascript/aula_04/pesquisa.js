"use strict"

const leia = require("readline-sync")

let idade,
    esporte,
    futebol = 0,
    voleibolMaiores18 = 0,
    basquetebolMenores18 = 0,
    outros = 0,
    continua = 'S'

while (continua === 'S') {
    idade = leia.questionInt("Digite a sua idade: ")

    //validação simples de dados
    do {
        esporte = leia.questionInt
            ("Digite o seu esporte favorito (1-FUTEBOL/2-VOLEI/3-BASQUETE/4-OUTROS): ")

        if (esporte < 1 || esporte > 4)
            console.log("DIGITE UM NÚMERO ENTRE 1 E 4")

    } while (esporte < 1 || esporte > 4)

    if (esporte === 1) {
        futebol++
    }

    if (esporte === 2 && idade >= 18) {
        voleibolMaiores18++
    }

    if (esporte === 3 && idade < 18) {
        BasquetebolMenor18++
    }

    if (esporte === 4) {
        outros++
    }

    continua = leia.question("Deseja continuar (S/N)?").toUpperCase()
}

console.log(`Total de pessoas que gostam de futebol: ${futebol}`)

console.log(`Total de pessoas que gostam de voleibol e são maiores de 18 anos: ${voleibolMaiores18}`)

console.log(`Total de pessoas que gostam de basquetebol e são menores de 18 anos: ${basquetebolMenores18}`)

console.log(`Total de pessoas que gostam de outros esportes: ${outros}`)
 