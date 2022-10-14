
// Conectivos && e || (E e OU)

// Na lógica argumentativa, existem os conceitos de proposições (premissas) verdadeiras e falsas

// Premissas:
// P1: eu gossto de JavaScript
// P2: eu gosto de tecnologia

// Quando quero juntar elas em uma única sentença, posso usar o conectivo "E" ou "OU".
// Eu gossto de JavaScript 'e' gosto de tecnologia
// Eu gossto de JavaScript 'ou' gosto de tecnologia

// no primeiro exemplo, a expressão  toda só será verdadeira se ambas as proposições (P1 e P2) sozinhas forem verdadeiras.
// caso contrário toda a expressão é falsa.

// no segundo exemplo, a expressão toda será verdadeira se ao menos uma das premissas forem verdadeiras.
// caso contrário toda a expressão é falsa.

// Em linguagens de programação em geral, temos que o conectivo 'E' é representado pelo 'E' comercial (&)
// No caso do JavaScript, é usado 'E' comercial duas vezes (&&)

// Exemplo prático usando conectivo &&(E):
console.log('Exemplo prático usando conectivo &&(E)')
console.log('')

const numero1 = 10, numero2 = 20

if( (numero1 === 10 ) && (numero2 ===20 ) ) {
    console.log('Expressão if foi suprida com valor verdadeiro')
} else {
    console.log('Expressão if foi suprida com valor falso')
}

// Exemplo prático usando conectivo ||(OU):
console.log('')
console.log('Exemplo prático usando conectivo ||(OU)')
console.log('')
const string = 'Java', string2 = 'Script'

if ( (string === 'Java') || (string2 = 'JavaScript') ) {
    console.log('Expressão if foi suprida com valor verdadeiro')
} else {
    console.log('Expressão if foi suprida com valor falso')
}

// exemplos com IF - ELSE
console.log('Exemplos com IF - ELSE')
var num = 10, num1 = 20
if(num < num1) {
    console.log(` ${num} é menor que ${num1} `)
} else if (` ${num} <= ${num1} `) {
    console.log('10 <= 12')    
} else {
    console.log('Programador')
}
