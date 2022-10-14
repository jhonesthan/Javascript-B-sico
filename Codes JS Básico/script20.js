// Aula 12
// Objects

/* Um objeto é uma coleção de dados relacionados e/ou funcionalidades (que geralmente consistem em diversas 
    variáveis e funções - que são chamadas propriedades e métodos quando de um objeto) */

// Objetos podem ser inicializados usando new Object(), Object.create(), ou usando a forma notação literal.

// Inicializando um objeto usando a notaçao literal

// Dot notation (notação de ponto)

// Serve para acessar ou declarar uma nova propriedade ou método.

// Declarando objeto de forma literal
console.log("")
console.log("********Declarando objeto de forma literal********")
console.log("")
const dotNotation = {
    prop1: "Sou uma propriedade que será acessada usando dot notation",
    metodo1: function () {
        return "Sou o retorno de um método, ou seja, uma funçãoo dentro de um objeto."
    }
}
// Acessando a propriedade e o número
console.log( dotNotation.prop1 )
console.log( dotNotation.metodo1() )

// --------------------------------------------------------------------
// Declarando uma nova propriedade e depois um novo método:
console.log("")
console.log("********Declarando uma nova propriedade e depois um novo método********")
console.log("")
dotNotation.prop2 = "Sou outra propriedade com valor tipo string."
dotNotation.metodo2 = () => "Sou o retorno de outro método."

// Acessando os novos componentes:
console.log( dotNotation.prop2 )
console.log( dotNotation.metodo2() )
console.log("")

// ---------------------------------------------------------------------
// Bracket notation (notação de colchete)
// Uma outra forma de acessar componentes de um objeto é por meio da notação de colchetes.
console.log("******** Acessando o objeto por meio da notação de colchetes.********")
console.log("")
const bracketNotation = {
    prop3: "Sou uma propriedade que será acessada usando bracket notation",
    metodo3: function () {
    "Sou o retorno de um método, ou seja, uma função dentro de um objeto."  
    }
}
// Acessando os elementos do objeto por meio do bracket notation:
console.log( bracketNotation['prop3'] )
console.log( bracketNotation['metodo3']() )

// ----------------------------------------------------------------------

// Declarando novos componentes do objet:
console.log("******* Declarando novos componentes do objeto ******")
console.log("")
bracketNotation['prop4'] = "Sou outra propriedade com valor do tipo string"
bracketNotation['metodo4'] = () => "Sou o retorno de outro método"

console.log( bracketNotation['prop4'] )
console.log( bracketNotation['metodo4']() )


// --------  youtube classes ---------

// Objetos são variáveis dentro de outras variavéis

var usuario1 = [
    {
        nome: 'jhone',
        idade: 21,
        profissão: 'Programador'
    },
    {
        nome: 'Maria',
        idade: 54,
        profissão: 'Cozinheira'
    },
    {
        nome: 'Joao',
        idade: 71,
        profissão: 'Jardineiro'
    }
];

var usuario2 = [
    {
        nome: 'Kassia',
        idade: 24,
        profissão: 'Esteticista'
    },
    {
        nome: 'Amélia',
        idade: 16,
        profissão: 'Estudante'
    },
    {
        nome: 'Smith',
        idade: 24,
        profissão: 'Advogado'
    }
];
// var allUsers = {usuario1, usuario2}
console.log('Dados do usuário 1')
console.log(usuario1);
console.log('Dados do usuário 2')
console.log(usuario2);