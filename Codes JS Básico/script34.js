// Aula 21.2 - Métodos de Arrays

// Remover valores em qualquer ponto

function array() {
    console.log(arrRemoveAnyPoint);
}

const arrRemoveAnyPoint = [1,2,5,3];

arrRemoveAnyPoint.splice(1,2);
array();



// Preencher um array com valores

const arrPreenchido = new Array(10);
arrPreenchido.fill(5, 1)
console.log(arrPreenchido);

arrPreenchido.fill(2, 2);
console.log(arrPreenchido);


//  Criar um sub Array a partir de um array

const subArray = [ "Jhone", "Desenvolvedor", "JavaScript", "Node.js", "Html&Css"];

const subArray1 = subArray.slice(3);
console.log(subArray1)



// Ordenar um Array

const arrayOrdenado = [2,3,1,10,8,6,7,80,0];

arrayOrdenado.sort();  // ordena os números em padrão
console.log(arrayOrdenado);


// ordenando de forma mais inteligente
// Função usada para determinar a ordem dos elementos
arrayOrdenado.sort((a,b) => a - b )
// se a-b for negativo, quer dizer que a ordem está correta
// se a-b for igual a 0, quer dizer que os números são iguais e não vai acontecer nada
// se a-b for positivo, quer dizer que a ordem está errada, então os números trocam de posição
console.log(arrayOrdenado);




// Filter, Find, Foreach, Map, Reduce
const arrBase = [
    {a: 2, b: 2},
    {a: 1, b: 2},
    {a: 5, b: 2},
    {a: 1, b: 2},
    {a: 8, b: 2}
];

console.log("--------------")
const filtered = arrBase.filter(el => el.a > 2);
console.log(filtered)
const find = arrBase.find(el => el.a == 8);
console.log(find)
const Foreach = arrBase.forEach(el => console.log( `a: ${el.a}, b: ${el.b}`));
console.log(Foreach)
const maped = arrBase.map(el => el.a += 1);
const maped1 = arrBase.map(el => el.b += 1);
console.log(maped, maped1)
const reduce = arrBase.reduce((acc, curr) => acc + curr.a, 0 );
console.log(reduce);

debugger