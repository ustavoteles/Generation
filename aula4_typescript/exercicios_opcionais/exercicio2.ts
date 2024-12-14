//Elabore um algoritmo para calcular e exibir a quantidade de litros
//de combustível consumidos durante uma viagem com um automóvel que 
//possui rendimento de 12 km/L. O cálculo do consumo de combustível deve
//ser feito com base em dois parâmetros que serão lidos via teclado:
//● Tempo gasto na viagem (em horas);
//● Velocidade média durante a viagem (em km/h).
//Com essas informações, é possível calcular a distância percorrida e,
//em seguida, determinar a quantidade de combustível necessária. 
// O resultado deve ser apresentado com duas casas decimais
//após o ponto. 

import readlinesync = require("readline-sync");

let tempoGasto, velocidadeMedia, combustivelTotal: number;

tempoGasto = readlinesync.questionFloat("Digite o tempo gasto na viagem (em horas): ");
velocidadeMedia = readlinesync.questionFloat("Digte a velocidade em media (EM KM POR HORAS [KM/H]): ");

//O AUTOMÓVEL EM QUESTAO FAZ 12 KM POR LITROS

combustivelTotal = (velocidadeMedia * tempoGasto) / 12;
console.log(`TOTAL DE COMBUSTÍVEL GASTO (EM LITROS): ${combustivelTotal.toFixed(2)}`)