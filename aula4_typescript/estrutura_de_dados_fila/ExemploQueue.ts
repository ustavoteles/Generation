import readlinesync = require("readline-sync");
import { Queue } from "./Queue";

const fila = new Queue<string>();

fila.enqueue("Gustavo");
fila.enqueue("Rafael");
fila.enqueue("Rodolfo");

//fila.enqueue(readlinesync.question("Digite o seu nome: "));

fila.printQueue();

console.log(fila.contains("GUSTAVO"));

console.log(fila.count())

console.log("\n Chamar: ",fila.dequeue());

fila.printQueue();

console.log(fila.peek())