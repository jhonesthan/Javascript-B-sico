// Aula 24.2 - Métodos de String (continuação)

const str1 = "NaN significa 'não é um número'. Infinity contem -Infinity e +Infinity em javaScript.",

    str2 = "Meu avô tem 65 anos de idade",
    str3 = "O contrato foi declarado null (nulo) e void (sem efeito)";

console.log(str1.match("número"));  // "Número" é uma string. retorna ["número"]
console.log(str1.match(NaN));       // O tipo de NaN é um número. Retorna ["NaN"]
console.log(str1.match(Infinity));  // O tipo de Infinity é um número, retorna [Infinity]
console.log(str1.match(+Infinity)); // Retorna ["Infinity"]
console.log(str1.match(-Infinity)); // Retorna ["-Infinity"]
console.log(str2.match(65));        // Retorna ["65"]
console.log(str2.match(+65));       // Um número com o sinal positivo. Retorna ["65 "]
console.log(str3.match(null));      // Retorna ["Null"]





// Métodos de comparação e verificação 

const stringDeTeste = "Essa é uma string de teste de jhone sthan!"

console.log(stringDeTeste.startsWith('Essa'));
console.log(stringDeTeste.endsWith('uma', 10));
console.log(stringDeTeste.includes("jhone sthan"));
console.log(stringDeTeste.indexOf("é"));
console.log(stringDeTeste.lastIndexOf("!"));
console.log(stringDeTeste.valueOf());


console.log(stringDeTeste.charCodeAt(0));
console.log(String.fromCharCode(69));