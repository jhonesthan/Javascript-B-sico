// Aula 21.1 - Métodos de Arrays

// Criando Arrays Recaptulação

const meuArrayLiteral = [1, 2, 3]; // forma literal

const meuArrayConstrutorInstance = new Array (1, 2, 3);

const meuArrayConstrutorCall = Array(1,2,3);

const meuArrayFrom = Array.from(meuArrayLiteral);

const meuArraySpread = [...meuArrayFrom];

"";

// Inserir e Remover elementos das extremidades

/* Conceitualmente temos início e fim, sendo início sempre igual ao
 índice 0, e o fim semmpre igual ao length -1
*/

function printArray() {
    console.log(arr)
}

const arr = [1];
printArray();
arr.push(2);    // Insere um novo valor no final da fila
printArray();
arr.unshift(5); // Insere um valor na frente (posisão 0)
printArray();
arr.shift();    // Remove oprimeiro valor
printArray();
arr.pop()       // Remove o segundo último valor
printArray();