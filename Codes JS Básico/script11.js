
// HOISTING (elevação, incento)


// Em javaScript, funções e variáveis são hoisted (ou "levadas ao topo").
// Hosting é um comportamento do javaScript de mover declarações para o topo de um escopo
// ( o escopo global ou da função em que se encontra).
// Extraído de: https://developer.mozilla.org/pt-br/docs/Glossario/Hosting


 // Exemplo 1:
 console.log('Exemplo 1')

 foo = 2 
 console.log(foo)
 var foo;

 // É implicitamente entendido como:

    // var = foo;
    // foo = 2;

// Exemplo 2:
console.log('Exemplo 2')

hoisted(); // faz o log da string "foo"

function hoisted() {
     console.log("foo");
 }

// Repare que nos exemplos acima utilizamos a palavra-chave 'var' para crir variáveis. 
// Isso porque 'var' é a única palavra-chave que permite com que o interpretador do JavaScript faça o hoisting.

// Por isso é importante sempre dar preferência ao 'let' e 'const' para criação de variáveis e constantes respectivamente.
// Pois são imunes a esse tipo de efeito colateral.

// Exemplo 3:
console.log('Exemplo 3');

let bar
bar = 2
console.log(bar) // bar is not defined
// let bar // jeito errado, deve ser usada no topo, assim com "const" e "var".

// Exemplo 4:
console.log('Exemplo 4');


baz = 5
console.log(baz) // baz is not defined
// const baz

// Somente declarações são elevadas. Inicializações não fazem parte do hosting.

// Exemplo 5:
console.log('Exemplo 5');

var x = 10
console.log(x, y)

var y = 7