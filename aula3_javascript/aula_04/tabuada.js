"use strict"

const leia = require("readline-sync")

let numero = leia.questionInt("Digite um numero: ")


for (let i = 0; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`)
}