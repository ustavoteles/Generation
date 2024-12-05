//Escreva um algoritmo que leia 3 palavras (string), 
//que definem as características de um tipo de animal, 
//segundo o diagrama abaixo, que deve 
//ser lido da esquerda para a direita.

const leia = require("readline-sync")

let animal1 = leia.question("O seu animal e Vertebrado ou Invertebrado ?: ").toLowerCase()
var animal2
var animal3

if (animal1 === "vertebrado") {
    animal2 = leia.question("O seu animal e ave ou mamifero ?: ").toLowerCase()
    if (animal2 === "ave") {
        animal3 = leia.question("O seu animal e carnivoro ou onivoro ?: ").toLowerCase()
        if (animal3 === "carnivoro") {
            console.log("O seu animal é uma Águia")
        } else if (animal3 === "onivoro") {
            console.log("O seu animal é uma Pomba")
        } else {
            console.log("Opção Inválida")
        }
    } else if (animal2 === "mamifero") {
        animal3 = leia.question("O seu animal e onivoro ou herbivoro ?: ").toLowerCase()
        if (animal3 === "onivoro") {
            console.log("O seu animal é um Homem")
        } else if (animal3 === "herbivoro") {
            console.log("O seu animal é uma Vaca")
        } else {
            console.log("Opção Inválida")
        }
    }
} else if (animal1 === "invertebrado") {
    animal2 = leia.question("O seu animal e um inseto ou um anelideo ?: ").toLowerCase()
    if (animal2 === "inseto") {
        animal3 = leia.question("O seu animal e hematofago ou herbivoro ?: ").toLowerCase()
        if (animal3 === "hematofago") {
            console.log("O seu animal é uma Pulga")
        } else if (animal3 === "herbivoro") {
            console.log("O seu animal é uma Lagarta")
        } else {
            console.log("Opção Inválida")
        }
    } else if (animal2 === "anelideo") {
        animal3 = leia.question("O seu animal e um hematofago ou onivoro ?: ").toLowerCase()
        if (animal3 === "hematofago") {
            console.log("O seu animal é uma Sanguessuga")
        } else if (animal3 === "onivoro") {
            console.log("O seu animal é uma Minhoca")
        } else {
            console.log("Opção Inválida");
        }
    } else {
        console.log("Opção Inválida");
    }
} else {
    console.log("Opção Inválida");
}
