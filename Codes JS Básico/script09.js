    
// PARTE 2

// ES-6 Arrow Functions:
let arrowF = () => {
    return "Sou o retorno na Arrow Function"
}

console.log(arrowF)
console.log(arrowF())

// IIFE (Immmediately Invoked Function Expression - ou função imediata)

let retornoIIFE = (function() {
    return 'Sou o retorno de uma função imediata(IIFE)'
})()
console.log(retornoIIFE)