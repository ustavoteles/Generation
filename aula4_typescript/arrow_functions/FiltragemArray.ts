let numerosOrdenados: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosRepetidos: Array<number> = [1, 2, 3, 1, 4, 5, 6, 2, 7, 8, 9, 3, 4, 10, 7];

let numerosDesordenados: Array<number> = [6, 7, 8, 1, 4, 5, 9, 10, 2, 3];

let estados: Array<string> = [
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Espirito Santo",
    "Rio Grande do Sul",
    "Santa Catarina",
    "Paraná"
];

let estadosRepetidos: Array<string> = [
    'São Paulo',
    'Rio de Janeiro',
    'Minas Gerais',
    'Espirito Santo',
    'São Paulo',
    'Rio de Janeiro',
    'São Paulo',
    'Rio de Janeiro',
];

let estadosCentroOeste: Array<string> = [
    'Goiás',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Brasília'
];

console.log(`\n Listar Estados que iniciam com a palavra "Rio" (filter())`);

let estadosContemRio = estados.filter(e => e.includes("RIO"));

//dir faz uma listagem
console.dir(estadosContemRio);

console.log(`\n Listar todos os números multiplicados por 3 (map())`);

let numerosMultiplicadosPorTres = numerosOrdenados.map(n => n * 3)

console.dir(numerosMultiplicadosPorTres)

console.log(`\n Listar todos os estados sem repetições (reduce())`);

let estadosSemRepeticoes = estadosRepetidos.reduce((acumulador: string[], e) => {
    if (acumulador.indexOf(e)===-1)
        acumulador.push(e);
    return acumulador;

},[])

console.dir(estadosSemRepeticoes);

console.log("\n Combinação de Arrays (spread Operator) (operador de espalhamento)")



const arrayCombinado:number[] = [...numerosOrdenados,...numerosDesordenados]

console.dir(arrayCombinado);