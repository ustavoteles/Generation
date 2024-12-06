//Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, 
//construa um algoritmo que consiga pesquisar dados no vetor, onde o usuário
//irá digitar um número e o programa deve exibir na tela a posição deste número
//no vetor. Caso o número não seja encontrado, a mensagem: “Não foi encontrado!”
//deve ser exibida na tela. Veja os exemplos abaixo:

const leia = require("readline-sync")

let vetorInt = new Array(10);
let mostrarNumero = 0

for (let i = 0; i < vetorInt.length; i++) {
    vetorInt[i] = leia.questionInt("Digite um numero: ")
}

console.clear()

let localizarNumero = leia.questionInt("Digite o numero que voce deseja encontrar: ")



for (let i = 0; i < vetorInt.length; i++) {
    if (localizarNumero === vetorInt[i]) {
        process.stdout.write(`[ ${vetorInt[i]} ]`)
        mostrarNumero = vetorInt[i]
    }
    else if (vetorInt[i] === vetorInt[i] && vetorInt[i] !== localizarNumero) {
        process.stdout.write(` ${vetorInt[i]} `)
    }

}

if (mostrarNumero === 0) {
    console.log(`\n O número ${localizarNumero} não foi encontrado!`)

}

if (mostrarNumero!==0) {
    console.log(`\n O número ${localizarNumero} está localizado na posição ${mostrarNumero}!`)

} 