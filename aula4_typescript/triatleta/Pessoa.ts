export abstract class Pessoa {

    private _nome: String;


    constructor(nome: String) {
        this._nome = nome;
    }


    public get nome(): String {
        return this._nome;
    }


    public set nome(value: String) {
        this._nome = value;
    }

    abstract cansou(): void; //assinatura do método

    public visualizar() {
        console.log("================================================")
        console.log("DADOS DO ATLETA")
        console.log("================================================")
        console.log(`Nome do Atleta: ${this._nome}`)
    }

}