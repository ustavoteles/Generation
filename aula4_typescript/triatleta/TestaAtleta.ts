import { Triatleta } from "./Triatleta";


function main(){

    const atleta = new Triatleta("Gustavo");

    atleta.visualizar();

    atleta.aquecer();

    atleta.nadar();

    atleta.pedalar();

    atleta.correr();

    atleta.cansou();
}

main();