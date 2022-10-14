// Bind, Call, Apply - aula 17

// Bind

// O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave this definida
// com o valor fornecido, com uma sequência determinada de argumentos precedendo quaisquer outros
// que sejam fornecidos quando a nova função é chamada.

// exemplo
    function thisBindExemplo() {
        console.log(this)
    }

    const obj = {exemplo: "Exemplo"}

    thisBindExemplo = thisBindExemplo.bind(obj)

    thisBindExemplo()


// NOTA: call() & apply tem uma sintaxe idêntica. A diferença é que call() aceita uma lista de argumentos, 
// enquanto aplly() aceita um array de argumentos.



// CALL()

// O método call() chama uma função com um dado 'this' e argumentos passados individualmente.
// O call() permite que uma função/método, pertencente a um objeto, seja atribuído e chamado por um objeto diferente.
// Dessa forma podendo reutilizar o método de um objeto em diversos outros objetos.

const obj1 = {
    exemplo1: "exemplo 1",
    mostrarThis: function thisCallExemplo() {
        console.log(this)
    }
}

obj1.mostrarThis()

const obj2 = {exemplo2: "exemplo 2"}

obj1.mostrarThis.call(obj2)



// APPLY()

// O método apply() chama uma função com um dado valor this, e argumenotos passados com um array(ou um objeto array-like).
// Em outras palavras é um call que aceita argumentos por meio de um array ao invés de serem individualmente(um a um).

const obj3 = {
    exemplo3: "exemplo 3",
    mostrarThis: function thisApplyExemplo() {
        console.log(this)
    }
}

obj3.mostrarThis()

const obj4 = {exemplo3: "exemplo 3"}

obj3.mostrarThis.apply(obj4, [1,2,3])