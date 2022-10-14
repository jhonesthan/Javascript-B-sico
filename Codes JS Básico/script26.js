// Escopos  - aula 15.1

// Em javascript existem dois tipos de escopos

// Local & Global

// Temos o que é chamado de escopo de função: cada função cria um novo escopo.

// Os escopos determinam a acessibilidade (visibilidade) das variáveis

// Variáveis definidas dentro de uma função não são acessíveis de fora da função.


// Escopo de função -> var
// Escopo de bloco  -> Let e Const

// ********* Exemplo de escopo local

// Código aqui não pode usar nomeCarros
console.log(nomeCarros)

function carros() {
    var nomeCarros = "Ferrari";

    console.log(nomeCarros)
}
carros();


// ********* Exemplo de escopo Global

var nomeCarro = "Mustang";
// código aqui PODE usar nomeCarro
console.log(nomeCarro)

function carro() {
    // aqui pode usar nomeCarro
    console.log(nomeCarro)
}
carro()



// **********************************************

// Escopo de função e escopo de bloco.

for (let i =0; i < 10; i++) {
    console.log(i)
}

for (var j = 0; j < 10; j++) {
    console.log(j)
}