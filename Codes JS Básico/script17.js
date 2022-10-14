// AULA 11.1
// ESTRUTURAS DE REPETIÇÃO (LOOPS)

// Iterar -> fazer ou dizer novavemnte, repetir, reinterar.

// Iteradores clássicos:
// DO WHILE
// WHILE
// FOR

// Iteradores de estrutura de dados iteráveis:
// FOR IN
// FOR OF

// Métodos de objetos iteráveis
// Métodos de Arrays e Objects


// -------------- DO - WHILE LOOP ------------------
// estrutura

//do {
    // Código aqui

    // incremento aqui. exemplo: i++
//} while (/*condiçãoa aqui*/ 1 < 0)



// Exercícios de exemplo

//************Imprimindo números de 1 a 5 **************//
let conte = 1;
do {
    console.log("Count is:" + conte);
    conte++;
} while (conte < 6)
// conte é: 1, 2, 3, 4, 5

//************Imprimindo caracteres numa string (cadeira de caracteres) **********
console.log("Imprimindo caracteres numa string (cadeira de caracteres)")
console.log("")
// string na qual estamos executando a repetição
let str = "hello";
// primeiro caractere está no índice 0:
let count = 0;
do {
    console.log(str[count]);
    count++;
} while (count < str.length)
//"h" "e" "l" "l" "o"