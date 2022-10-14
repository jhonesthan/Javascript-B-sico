//Quase tudo em js é um objeto..

// Uma exceção são os tipos primitivos..

// TIPOS PRIMITIVOS
// SÃO : Number, String, Bolean, Underfined, Null

let meuNumero = 10;
let minhaString = "Olá Jhonesthan!";
let meuBolean = true;
let meuUnderfined = undefined;
let meuNull = null;


console.log("Meu número é:",  meuNumero);
console.log('O tipo do número é:', typeof meuNumero); // printando tipo da variavél
console.log("O tipo do meu bolean é:", typeof meuBolean);
console.log("O tipo do meu underfinded é:", typeof undefined);
console.log("O tipo do meu null é:", typeof meuNull);
//TODOS OS PRIMITIVOS SÃO IMUTÁVEIS (não pode ter seu valor modificado).



// classes youtube
var myName = ' Ruanita ricae del cobos '
console.log(myName.repeat(3)); //repete meu nome 3 vezes
console.log(myName.toLocaleLowerCase()); // deixa tudo em minúsculo
console.log(myName.toUpperCase()); // tudo maiúsculo
console.log(myName.indexOf('del')) // procura o trecho no texto e retorna a sua posição
console.log(myName.indexOf('jhone')); // texto inválido é retornado -1
console.log(myName.replace('Ruanita', 'jhone')); // substitui "Ruanita" por "jhone"
console.log(myName.slice(9, 13)); // retornará a palavra "rica"

var nomeCompleto = '    Armando de souza mendes     ', idadepai = 43;
console.log(nomeCompleto);
console.log(nomeCompleto.trim()); // remove todos os espaços esquerda & direita
var filha = 'Maria de souza mendes', idadefilha = 16

console.log(nomeCompleto.trim().slice(0,7) + " é pai da " + filha.slice(0,5)) // printando uma junção de strings com variáveis
//ou 
console.log(`O ${nomeCompleto.trim().slice(0,7)} é ${idadepai - idadefilha} anos mais velho que ${filha.slice(0,5)}, a sua filha.`)