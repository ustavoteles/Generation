import readline = require("readline-sync");
import { ExcecaoSimples } from "./ExcecaoSimples";

let resultado: number | null;
let loop: boolean = true;

let numero1: number = readline.questionFloat("Digite o primeiro numero: ");

do {
    try {
        let numero2: number = readline.questionFloat("Digite o segundo numero: ");

        resultado = dividir(numero1, numero2);

        console.log(`${numero1} / ${numero2} = ${resultado}`);

        loop = false;

    } catch (error: any) {
        if (error instanceof ExcecaoSimples) {
            console.error(error.name);
            console.error(error.message);
            console.error("\n Tente novamente")
        }
        else
            console.error("\n Error Inesperado")
    }
} while (loop);

function dividir(numero1: number, numero2: number): number | null {

    if (numero2 == 0)
        throw new ExcecaoSimples("Não Existe divisão por zero");
    return numero1 / numero2;

}