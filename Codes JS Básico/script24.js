// Objetos - continuação
// parte 3

var usuarioFunction = {
    nome: 'Jhone dos Santos',
    idade: 22,
    sexo: 'M',
    pais: 'Brasil'
}

var props = Object.keys(usuarioFunction);
console.log(props);

for (var i = 0; i < props.length; i++) {
    // console.log(props[i]);
    // console.log('usuarioFunction', usuarioFunction[props[i]]);
}

for (var prop of props) {
    // console.log('usuarioFunction', usuarioFunction[props[i]]);
}

for (var prop2 in usuarioFunction) {
    if (usuarioFunction.hasOwnProperty(prop2)) {
        console.log( prop2,usuarioFunction[prop2]);
    }
}
