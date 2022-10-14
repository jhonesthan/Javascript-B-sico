//AULA 11.3

// Estruturas de repetição

// FOOR LOOP


// for (let i = 0; i < 6; i++)
//     console.log(i)

    // outra maneira de fazer o FOR
    // console.log("outr maneira de fazer o FOR")
    // console.log("")
    // let i = 0
    // for(;;) {
    //     if(i < 6) {
    //         console.log(i);
    //     }
    //     i++;
    // }

//***** imprimindo números de 1 a 5 ******/
console.log("")
console.log("Imprimindo números de 1 a 10")
console.log("")
for(let count = 0; count <10; count++) {
    console.log(count)
}

// ***** imprima cada caractere de uma string ******
console.log("imprimindo cada caractere de uma string")
let str = " Olá Jhone "
for (let i = 10; i < str.length; i+=1) {
    console.log(str[i])
}

// ****** Impriman todos os números de -10 a 29 usando FOR loop *********
for(let contador = -10; contador < 30; contador++) {
    console.log(contador);
}


// imprima todos os números pares entre 1 e 40, Usando FOR loop.
console.log(" imprimindo todos os números pares entre 1 e 40")
console.log(" Exemplo 1")
for(let i = 2; i <= 40; i+=2)
console.log(i)

// ou
console.log("")
console.log(" Exemplo 2")
for(let i = 1; i <= 40; i++) {
    if (i % 2 == 0)  {
        console.log(i)
    }
}

// imprima todos os números ímpares entre 300 e 333, Usando FOR loop.
console.log(" imprimindo todos os números ímpares entre 300 e 333")
console.log(" Exemplo 1")
for(i = 301; i <= 333; i+=2) {
        console.log(i)
}

console.log(" Exemplo 2")
for(i = 300; i <= 333; i++) {
    if(i % 2 !== 0) {
        console.log(i)
    }
}


// Imprima todos os números divisíveis por 5 e 3 que estejam entre 5 e 50, usando FOR loop.
console.log(" Imprimindo todos os números divisíveis por 5 e 3 que estejam entre 5 e 50")
for (let i = 5; i <= 50; i++) {
    if ( (i % 5 ==0) && ( i % 3 == 0) ) {
        console.log(i);
    }
}