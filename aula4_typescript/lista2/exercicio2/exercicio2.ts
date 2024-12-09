import readlinesync = require("readline-sync")
import { Stack } from "./Stack"

const pilhaLivro = new Stack<string>
let escolhaUsuario
let adicionarLivro

do {
    console.log("==============================")
    console.log("  1 - Adicionar Livro na pilha")
    console.log("  2 - Listar todos os Livros")
    console.log("  3 - Retirar Livro da pilha")
    console.log("  0 - Sair")
    console.log("==============================")
    escolhaUsuario = readlinesync.questionInt("\nEntre com a opcao desejada: ")

    if (escolhaUsuario !== 0 && escolhaUsuario !== 1 && escolhaUsuario !== 2 && escolhaUsuario !== 3) {
        console.log("==============================")
        escolhaUsuario = readlinesync.questionInt("\nopcao invalida, digite novamente: ")
        console.log("==============================")

    }
    if (escolhaUsuario === 1) {
        if (pilhaLivro.isEmpty() === true) {
            console.log("==============================")
            console.log("ADICIONAR LIVRO NA PILHA")
            console.log("=============================")
            adicionarLivro = readlinesync.question("Digite o nome do Livro: ").toUpperCase()
            pilhaLivro.push(adicionarLivro)
            console.log("=============================")
            console.log(`O LIVRO "${adicionarLivro}" FOI ADICIONADO!`)
            console.log("=============================")
            console.log("PILHA:")
            pilhaLivro.printStack()
            console.log("=============================")
            
        }
        else {
            console.log("==============================")
            console.log("ADICIONAR LIVRO NA PILHA")
            console.log("=============================")
            adicionarLivro = readlinesync.question("Digite o nome do Livro: ").toUpperCase()
            pilhaLivro.push(adicionarLivro)
            console.log("============================")
            console.log("PILHA:")
            pilhaLivro.printStack()
            console.log("=============================")
            console.log(`O LIVRO "${adicionarLivro}" FOI ADICIONADO!\n`)
        }
    }
    if (escolhaUsuario === 2) {
        if (pilhaLivro.isEmpty() === true) {
            console.log("==============================")
            console.log("A pilha está vazia!")
        } else {
            console.log("=============================")
            console.log("LISTA DE LIVROS NA PILHA")
            pilhaLivro.printStack()
        }
    }
    if (escolhaUsuario === 3) {
        if (pilhaLivro.isEmpty() === true) {
            console.log("==============================")
            console.log("A pilha está vazia!")
        } else {
            console.log("==============================")
            console.log("RETIRAR LIVRO DA PILHA")
            console.log(`O LIVRO ${pilhaLivro.pop()} foi RETIRADO DA PILHA!`)
            console.log("==============================")
            pilhaLivro.printStack()
        }
    }

    if (escolhaUsuario === 0) {
        console.log("PROGRAMA FINALIZADO!")
        process.exit(0)
    }
} while ((escolhaUsuario >= 1 || escolhaUsuario <= 3) && (escolhaUsuario !== 0))