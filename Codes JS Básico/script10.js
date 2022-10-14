
// PARTE 3

//Função soma

// com declaração clásica

function soma (num1, num2) {
    const sum = num1 + num2 
    return sum
}

console.log( soma(15,15) )

const resultadoSoma = soma(15, 15)

console.log(resultadoSoma + 10) 

// MESMO EXEMPLO - usando função anônima

console.log('MESMO EXEMPLO - usando função anônima')

const somaAnonima = function(num1, num2) {
    return num1 + num2
}
console.log( somaAnonima(20, 20 ))

// Com Arrow Function

console.log('MESMO EXEMPLO - Com Arrow Function')

// Uma alternativa
const somaArrow = (num1, num2) => {
    return num1 + num2
}

// Outra alternativa

const somaArrowReduced = (num1, num2) => num1 + num2

console.log( somaArrow (100, 50) )
console.log( somaArrowReduced ( 200, 200))
