// continuação - Parte 2
// Objetos


var novoUsuário = {
    nome: 'jhone',
    idade: 27,
    pais:  'Brasil',
    site: 'jhone.com.br'
}

// exemplos do EmcaScript 6

var { nome, pais, idade } = novoUsuário;
console.log(nome,pais,idade);

var { nome: primeiroNome } = novoUsuário;
console.log(primeiroNome);

var { site: url } = novoUsuário;
console.log(url) //url foi a variável criada

var newUser = {
    nome: {
        primeiro: 'Jhone 2',
        // ultimo: 'Sthan'
    }
};

// forma tradicional
// var primeiro = newUser.nome.primeiro;
// console.log(primeiro)

var { nome: { ultimo }} = newUser;
console.log((ultimo))

var { nome: {segundo = 'santos' }} = newUser; // este valor só será atribuído se 'segundo' estiver realmente vazio.
console.log(segundo);


// imprimindo com função
function imprimirUser(usuarios) {
    console.log(usuarios.nome);
    console.log(usuarios.idade);
    console.log(usuarios.sexo);
}
//ou 
function imprimirUser({nome, idade, sexo, pais = 'Japão'}) {
    console.log(nome);
    console.log(idade);
    console.log(sexo);
    console.log(pais)
}

var userFunction = {
    nome : 'Jhone Vale',
    idade: 27,
    sexo: 'M',
    pais: 'Brasil'
}
imprimirUser(userFunction);

//

console.log(Object.keys(userFunction)); // imprimiu as chaves do objetos
console.log(Object.values(userFunction)); // imprimiu os valores do objeto