// Funções Construtoras - aula 14

// Funções são usadas para construir objetos.

// Exemplo abaixo é de uma função construtora de ventiladores

function Ventilador(velMax) {
    this.velocidadeMaxima = velMax;
    this.ligado = false
}

// Instâncias

// para criar uma instância de um objeto do tipo "Ventilador" usamos a palavra reservada 'new' seguida da chamada da função

const ventilador1 = new Ventilador(3);

// Acessando propriedades

// para acessar propriedades, como já foi vsito, usamos o "."
console.log(ventilador1.velocidadeMaxima); //retorna 3


// Diferente de outras linguagens orientadas a objetos, podemos adicionar propriedades e métodos em tempo de execução.

ventilador1.cor = "branco"
console.log(ventilador1.cor)

ventilador1.ligaDesliga = function() {
    if(this.ligado) 
        this.ligado = false
    else
        this.ligado = true
}

ventilador1.ligaDesliga();
console.log(ventilador1.ligado);
ventilador1.ligaDesliga();
console.log(ventilador1.ligado);

console.log(ventilador1);

// Adicionando o método por meio do protótipo para que seja aplicado a todos os objetos.

// function Liga(){
//     this.ligado = true;
// }
// Ventilador.prototype.ligar = Liga;


// youtube - classes

// function soma (a,b) { return a+b;}

// var soma = function(a,b) {return a + b;}


// Arrow function foi criada pra facilitar o código, pra diminuir

var soma = (a,b) => {return a + b;}

console.log(soma(10,20));
console.log(soma(15,80));

// então quando ela tem retorno de apenas um valor direto, podemos tirar o 'return' e as 'chaves'.
// Exemplo com apenas uma variável
console.log('Exemplo com apenas uma variável')
var dobro = d=>d*2

console.log(dobro(20));
console.log(dobro(15));

// Mostrando a diferença da função anônima para Arrow function é o 'this'
// 'this' é uma palavra chave que faz referencia a um objeto.

var func = function() {
    console.log(this.nome);
}

var objeto = {
    nome: 'Jhone',
    f: func,
}

var objeto2 = {
    nome: 'Sthan',
    f: func,
}

objeto.f();
objeto2.f();

// Soma de números
console.log('SOMA DE NÚMEROS')
function somaTudo(numeros) {
    var total = 0;

    for (var num of numeros) {
        total = total + num;
    }
    return total;
}

var arrayNumeros = [ 3, 5, 7, 10, 9, 12 ];
var resultado = somaTudo(arrayNumeros);
console.log(resultado);

function writeAdress (rua, cidade, pais, ...complementos) {
    console.log(rua);
    console.log(cidade);
    console.log(pais);

    console.log(complementos);
}
writeAdress(' Monteiro de souza', ' Tefé ', ' Brasil', 
    'Estado do amazonas', 'Loja Santos','Cep:123.123.132', 'bloco 03');

