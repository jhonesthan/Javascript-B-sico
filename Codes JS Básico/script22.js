// continuação
var usuario = [
    'Jhone',
    21,
    'Programador',
    2022,
    'Brasileiro'
]
console.log(usuario)
usuario.push('AM')
console.log(usuario); // Acrescenta um array na última posição
console.log(usuario.includes('Jhone')); //verifica se há o valor especificado
console.log(usuario.includes(2020));
console.log(usuario.indexOf('Programador')); // indentifica a posição do array

// Juntando os arrays em um só
var userInfo = ['Html','css','Javascript','React']
var result = usuario.concat(userInfo).concat(['Full Stack','Front-end','Back-end','Java.net']);
console.log(result)

//ou
var result = usuario.concat(userInfo).concat(['Full Stack','Front-end','Back-end','Java.net']);
console.log(result)
// ou passando em um único 'Concat'
var resultado = usuario.concat(userInfo, ['Full Stack','Front-end','Back-end','Java.net'])
console.log(resultado)
// ou usando a maneira mais rápida e limpa do js
console.log('-------------')
console.log([...usuario, ...userInfo, ...['Full Stack','Front-end','Back-end','Java.net']]);

// criando variáveis e armazenando-a em suas posições

var nome = usuario[0], idade = usuario[1], ano = usuario[3], nacionalidade = usuario[4];
console.log(nome, idade,ano,);

// ecmascript 
console.log('---  em ecmaScript')
var [name, idade, , ano, nacionalidade] = usuario;
console.log(nome, idade, ano, nacionalidade)