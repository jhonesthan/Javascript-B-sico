// A programação estruturada é feita de escolhas lógicas.
// Verdadeiro ou falso.
// Sim ou não
// 0 ou 1;
// e a maneira mais simples de representar isso é por meios de estruturas de condição.

// Exemplo 1:
console.log('Exemplo 1')

const fruta = 'maçã'

if (fruta == 'maçã') {
    console.log('Fruta é igual a maçã')
} else {
    console.log('Fruta não é igual a maçã')
}

// Com vários ifs seguidos.
// O problema é que se todos forem verdadeiros, o interpretador irá executar todos.

// Exemplo 2:
console.log('Exemplo 2')

const numero = 1

if(numero === 1) {
    console.log( numero + ' é igual a 1')
}

if (numero === 2) {
    console.log( numero + ' é igual a 2')
}

if (numero === 3) {
    console.log( numero + ' é igual a 3')
}



// Exemplo 3:
console.log('Exemplo 3')

// O mesmo código acima, escrito de uma forma que execute apenas uma das operações verdadeiras.

const number = 3

if(number == 1) {
    console.log( number + ' é igual a 1')
} else if (numero == 2) {
    console.log( number + ' é igual a 2')
} else {
    console.log(' é acima de 3')
}