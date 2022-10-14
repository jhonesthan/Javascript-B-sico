// Aula 20 - Funções de primeira class

// Atribuir uma função à uma variável

const foo = function asd() {
    console.log('foobar');

}

foo();



// Passando uma função como um argumento

function disOla() {
    return "Olá, "
}
function apresentacao(funcaoMensagemOla, nome) {
    console.log(funcaoMensagemOla() + nome);
}
apresentacao(disOla, "JavaScript!")




// Retornar uma função

function printDevJhone() {
    return function() {
        console.log('Desnvolvedor Jhone');
    }
}

// Como chaamr o valor da função acima ?

// Usando uma variável
// const myFunc = printDevJhone();
// myFunc();

// Usando duplo parênteses
printDevJhone()();