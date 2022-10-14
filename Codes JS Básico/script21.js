// class 13 - Arrays

// O objeto array do javascript é um objeto global usado na construção de "arrays": objetos de alto nível semelhantes a listas.

// Principais características de um ARRAY em javascript:

// - são objetos que tem, nativamente, diversos métodos embutidos para realizar diversos tipos de operação.
        // dentre eles estão: inserir - remover - atravessar o array e criar novos arrays

// - são heterogêneos (aceitam diversos tipos de dados dentro da mesma lista - inclusive outros arrays e objetos)

// - não tem tamanho fixo (podendo ser alterado a qualquer momento)

// - índices são acessados por meio de números a partir do 0 (exemplo: arr[0] - arr[1] - arr[2] ...)

// acessamos o tamanho do array por meio de propriedades nativa "lenght" (exemplo: arr.lenght)


let fruta = []
//ou
let frutas = ['kiwi', 'banana', 'Manga']
console.log(` ---- A quantidade de frutas é: ${frutas.length} `)
//3

console.log("")
console.log(" ----- Usando operador new")
// outra maneira seria usando o operador new, ele constrói um objeto por meio da função construtora do array

let frutasUsandoNew = new Array('maçã', 'Banana') // declarando elementos como argumentos.

let arrTamanho = new Array(10) // dando o número de posições como argumentos.

console.log(frutasUsandoNew)



// Exemplo de array denso:
const arrDenso = [1, 2, 3, 4, 5, 6]

// Exemplo de array esparso:
const arrEsparso = [1,,,3]

// Tornando-o esparso por meio de inserção posterior:
arrEsparso[10] = 10

// Deletar elementos de um array:s
const arrDel = ['a', 2, 'b', 'c', 'd' ]
delete arrDel[1] // deletou o elemento 2
// o delete não retira o espaço ocupado pelo elemento, apenas exclui o dado nesse espaço, e coloca 'underfined' no lugar.

// A propriedade lenght é writable, isso quer dizer que ela pode ser alterada.
const animais = ["cão", "gat", "cavalo", "elefante", "leão", "tartaruga", "vaca"]
animais.length
animais.length[4] // animais
animais //

// ------ classes youtube

console.log('   Exemplos do youtube')
var numeros = [5, 3, 12, 50, 99];
var letras = ['o','v','r','J','h','o','n','e','p','t']
console.log(numeros, letras)
console.log(numeros[3]) // imprimindo apenas o elemento na 4º posição (50)

console.log(numeros.pop()); //remove e retorna o último elemento
console.log(numeros)
var numRetornado =  numeros.pop();
console.log(`Número retornado: ${numRetornado}`)

console.log(letras.slice(3,8))
console.log(numeros.slice(0).join(' - ')) // transforma em string
