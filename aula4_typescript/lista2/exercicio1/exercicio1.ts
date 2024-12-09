import readlinesync = require("readline-sync")
import { Queue } from "./Queue"

const filaBanco = new Queue<string>
let escolhaUsuario
let adicionarNomeCliente



do {
    console.log("==============================")
    console.log("  1 - Adicionar Cliente na Fila")
    console.log("  2 - Listar todos os Clientes")
    console.log("  3 - Retirar Cliente da Fila")
    console.log("  0 - Sair")
    console.log("==============================")
    escolhaUsuario = readlinesync.questionInt("\nEntre com a opcao desejada: ")

    if (escolhaUsuario !== 0 && escolhaUsuario !== 1 && escolhaUsuario !== 2 && escolhaUsuario !== 3) {
        console.log("==============================")
        escolhaUsuario = readlinesync.questionInt("\nopcao invalida, digite novamente: ")
        console.log("==============================")

    }

    if (escolhaUsuario === 1) {
        if (filaBanco.isEmpty() === true) {
            console.log("==============================")
            console.log("ADICIONAR CLIENTE NA LISTA")
            console.log("=============================")
            adicionarNomeCliente = readlinesync.question("Digite o nome do Cliente: ").toUpperCase()
            filaBanco.enqueue(adicionarNomeCliente)
            console.log("=============================")
            console.log(`CLIENTE ${adicionarNomeCliente} ADICIONADO!`)
        }
        else {
            console.log("==============================")
            console.log("ADICIONAR CLIENTE NA LISTA")
            console.log("=============================")
            adicionarNomeCliente = readlinesync.question("Digite o nome do Cliente: ").toUpperCase()
            filaBanco.enqueue(adicionarNomeCliente)
            console.log("============================")
            console.log("FILA:")
            filaBanco.printQueue()
            console.log("=============================")
            console.log(`CLIENTE ${adicionarNomeCliente} ADICIONADO!\n`)
        }
    }

    if (escolhaUsuario === 2) {
        if (filaBanco.isEmpty() === true) {
            console.log("==============================")
            console.log("A fila está vazia!")
        } else {
            console.log("=============================")
            console.log("LISTA DE TODOS OS CLIENTES NA FILA")
            filaBanco.printQueue()
        }
    }

    if (escolhaUsuario === 3) {
        if (filaBanco.isEmpty() === true) {
            console.log("==============================")
            console.log("A fila está vazia!")
        } else {
            console.log("==============================")
            console.log("RETIRAR CLIENTE DA FILA")
            console.log(`O Cliente ${filaBanco.dequeue()} foi Chamado!`)
            console.log("==============================")
            filaBanco.printQueue()
        }

    }

    if (escolhaUsuario === 0) {
        console.log("PROGRAMA FINALIZADO!")
        process.exit(0)
    }
} while ((escolhaUsuario >= 1 || escolhaUsuario <= 3) && (escolhaUsuario !== 0))