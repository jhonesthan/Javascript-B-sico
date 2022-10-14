// AULA 11.2 

// Estrutura de repetição - continuação 

let conte = 1;
while (conte < 6) {
    console.log("Count  is: " + conte);
    conte++
}

//************Imprimindo caracteres numa string (cadeira de caracteres) **********
console.log("Imprimindo caracteres numa string (cadeira de caracteres)")
console.log("")
// string na qual estamos executando a repetição
let str = "hello";
// primeiro caractere está no índice 0:
let count = 0;
while(count < str.length) {
    console.log(str[count]);
    count++
}
//"h" "e" "l" "l" "o"

//********* Loops infinitos ocorrem quando a condição que está sendo testada nunca se torna verdadeira ********** //
// console.log("Infiniy Loop")
// console.log("")
// let loop = 0
// while(loop < 10) {
//     console.log(loop);
// }
// Exemplo acima imprime o "0" inifinitamente porque loop nunca é incrementado


//********** Exercício 01 **********/
console.log("Imprimindo Números Ímpares")
let num = 1
while (num < 10) {
    console.log(num);
    num+= 2;
}
//  o exemplo acima imprime apenas os números ímpares de 1 a 10.


//********** Exercício 02 **********/
console.log("Imprimindo Números divisíveis por 4")
let num2 = 1;
while (num2 <= 20) {
    if(num2 % 4 === 0 ) {
        console.log(num2);
    }
    num2++;
}
//  o exemplo acima imprime os de 1 a 20 apens números que são divisíveis por 4.


//********** Exercício 03 **********/
let num3 = 100;
while(num3 <110) {
    console.log(num3 + 1)
    num3++;
}

// o exemplo acima é de loop infinito nevativo contando a partir do 100