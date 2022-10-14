
// EXISTE TAMBÉM UMA OUTRA FORMA DE REPRESENTAR UMA CONDICÇÃO
// QUE É POR MEIO DO OPERADOR TERNÁRIO

const idade = 17

idade >= 18 ? console.log("Maior de idade") : console.log("Menor de idade")

console.log("")
console.log("")

// Exemplo 2
// Uma função com retorno usando operador ternário

const somaOuMultiplica = (valor) => {
    return valor >= 10 ? valor + valor : valor * valor;
    }

// Mesma função escrita utiliznando o IF - ELSE

// const somaOuMultiplica = function (valor) {

//     if (valor >= 10 ) {
//         return valor + valor
//     } else {
//         return valor * valor
//     }
// }

// Soluções na tela 
console.log( "Menores que 10:" )
console.log(somaOuMultiplica(1))
console.log(somaOuMultiplica(2))
console.log(somaOuMultiplica(3))
console.log(somaOuMultiplica(4))
console.log(somaOuMultiplica(5))

console.log( "Maiores que 10:" )
console.log(somaOuMultiplica(10))
console.log(somaOuMultiplica(15))
console.log(somaOuMultiplica(20))
console.log(somaOuMultiplica(50))
console.log(somaOuMultiplica(100))
