//Com base na tabela abaixo, escreva um algoritmo 
//que leia o código de um item (número inteiro entre 1 e 6) e
// a quantidade comprada deste item (número inteiro). 
//A seguir, mostre na tela o valor total da conta e o nome do 
//produto que foi comprado.

const leia = require("readline-sync")

let quantidade
let codigo
let total
let preco
let nomeProduto

console.log("===========Cardápio===========")
console.log("1 - Cachorro Quente - R$ 10.00")
console.log("2 -      X-Salada   - R$ 15.00")
console.log("3 -      X-Bacon    - R$ 18.00")
console.log("4 -      Bauru      - R$ 12.00")
console.log("5 -  Refrigerante   - R$  8.00")
console.log("6 - Suco de Laranja - R$ 13.00")



codigo = leia.questionInt("Digite o codigo do Item que voce deseja: ")
quantidade = leia.questionInt("Digite o quantidade do Item que voce deseja: ")

switch (codigo) {
    case 1:
        nomeProduto = "Cachorro Quente"
        console.log(`Você selecionou ${nomeProduto}`)
        preco = 10.00
        total = quantidade * preco
        break
    case 2:
        nomeProduto = "X-Salada"
        console.log(`Você selecionou ${nomeProduto}`)
        preco = 15.00
        total = quantidade * preco
        break
    case 3:
        nomeProduto = "X-Bacon"
        console.log(`Você selecionou ${nomeProduto}`)
        preco = 18.00
        total = quantidade * preco
        break
    case 4:
        nomeProduto = "Bauru"
        console.log(`Você selecionou ${nomeProduto}`)
        preco = 12.00
        total = quantidade * preco
        break
    case 5:
        nomeProduto = "Refrigerante"
        console.log(`Você selecionou ${nomeProduto}`)
        preco = 8.00
        total = quantidade * preco
        break
    case 6:
        nomeProduto = "Suco de Laranja"
        console.log(`Você selecionou ${nomeProduto}`)
        preco = 13.00
        total = quantidade * preco
        break
    default:
        console.log("Opção Inválida")
        break
}

console.log(`Pedido Finalizado!!\nVocê selecionou [${quantidade}] - ${nomeProduto}`)
console.log(`VALOR TOTAL: ${new Intl.NumberFormat("pt-BR",{
    style:"currency",
    currency:"BRL",
}).format(total)}`)