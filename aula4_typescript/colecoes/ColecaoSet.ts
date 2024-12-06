const frutas: Set<string> = new Set<string>();

frutas.add("Banana");
frutas.add("Maça");
frutas.add("Caqui");
frutas.add("Banana"); 
//nao deixa repetir
//somente na colecao array

//o set nao tem indice, o resultado que volta é só um index da interação
frutas.add("Manga");

console.table(frutas)

console.log("A fruta Morango existe? ",frutas.has("Morango"));

frutas.delete("Caqui");

console.table(frutas)

//transformar em array pra murdar a ordem

let setOrdenado: Array<string> = Array.from(frutas).sort(); 
//método from cria um array a partir do set frutas
//from é um metodo do array

//usar set, quando você quer garantir que nao vai ter repetição
console.table(setOrdenado)