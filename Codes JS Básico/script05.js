
// BOLEAN 

// Basicamente é um tipo de dado que trabalha com 2 valores TRUE ou FALSE

// Temos basicamente 2 tipos de valores em Javascript TRUTHY E FALSY

// FALSY: false - null - underfined - 0 - NaN - '' -
//TRUTHY: todos os valores que não forem FALSY

let comparar2 = (5 == "5")
let comparar1 = (5 == 5)
let comparar3 = (5 === 5)
let comparar4 = (5 === "5")


console.log(comparar1);
console.log(comparar2);
console.log(comparar3);
console.log(comparar4);

// (==) comparam somente valor.
// (===) comparam valor e o tipo

console.log("")
console.log("   Comparação de tipo 1")
let x = 5 
console.log(x != "5")
console.log("")
console.log("   Comparação de tipo 02 ")
console.log(x !== "5")

console.log("")

let a = 100, b = 200, c = 100
console.log(a > b)
console.log(a < b)
console.log(a >= c)

// Uma maneira de saber se o valor é false ou true
// é fazendo a negação dele/ inversão

console.log("")

console.log("   Negação ")

console.log(true)
console.log(!true)
console.log(!!true)

console.log("")

console.log(false)
console.log(!false)
console.log(!!false)

console.log("   Null")

console.log(null)
console.log(!null)
console.log(!!null)

console.log("   string vazia")
console.log(!"")
console.log(!!"")

console.log("   underfined")

console.log(undefined)
console.log(!undefined)
console.log(!!undefined)

console.log("   NaN")

console.log(NaN)
console.log(!NaN)
console.log(!!NaN)

console.log("   Exemplos de TRUTHY")
console.log(!![])
console.log(!!{})
console.log(!!"0")
console.log(!!"hello jhone")
