
//uma classe excecaoSimples com extensao da classe error
export class ExcecaoSimples extends Error {
    constructor(message: string) {
        super();
        this.name = "Excecao Simples";
        this.message = message;
    }
}