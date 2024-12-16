try {
    const resultado = converte(123);

    console.log(resultado);
} catch (error: any) {
    if (error instanceof TypeError)
        console.log("\n Você digitou um valor que não é do tipo String!")
    else
        console.error("\n Erro Inesperado", error.message);
} finally{
    console.log("\n Programa Finalizado!")
}
export function converte(conteudo: any): string {
    return conteudo.toUpperCase();
}
