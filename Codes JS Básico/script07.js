 // FUNCTIONS 

// Funçõe, em um contexto amplo, são blocos de códigos (ou Subprogramas, e ainda SubRotinas)
// estruturados que sempre retornam um valor.

// Procedimentos são um bloco de códigos estruturados também que não retornam um valor.

// No caso do JavaScript ainda que voçê não retorne nada a função irá retornar 'undefined'.

// Exemplo: 

let variavel = 'This string will be replaced by the return of the next function'

function funcReturnUndefined() {
    let nu1 = 10, nu2 = 20, nu3 = 30, soma = nu1 + nu2 + nu3;
    return undefined
}
variavel = funcReturnUndefined()
console.log(funcReturnUndefined)
 // ESTRUTURA INICIAL:

//  function nomeDaFuncao() {
    // código

     // no final retorna explicitamente
//  }