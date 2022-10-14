// Escopos  - aula 15.2

// Argumentos de função (parâmetros) são vistos como variáveis locais dentro da função.

// Os parâmentros são variáveis locais também 
function paramsLocais(local1, local2) {
    console.log(local1, local2);
}

paramsLocais('Sou Local 1', ' Sou local 2');


// Outra situação é quando temos uma função dentro de outra.

let nivelGlogal = 'Nível Global';
let nivel1 = undefined, nivel2 = undefined, nivel3 = undefined;

function funcaoNivel1() {
    let nivel1 = 'Nível 1'
    
    function funcaoNivel2() {
        let nivel2 = 'Nível 2'

        function funcaoNivel3() {
            let nivel3 = 'Nível 3'
            console.log(`\nFunção nível 3 resultados: \n${nivelGlogal} \n${nivel1} \n${nivel2} \n${nivel3} `);
        funcaoNivel3()

        console.log(`\nFunção nível 2 resultados: \n${nivelGlogal} \n${nivel1} \n${nivel2} \n${nivel3 ? nivel3  : 'Nível 3 Inacessível'} `);
        }   // De fora pra dentro não dá pra coletar valores, somente de dentro pra fora
    }
    funcaoNivel2()

    console.log(`\nFunção nível 1 resultados: \n${nivelGlogal} \n${nivel1} \n${nivel2 ? nivel2 : 'Nível 2 Inacessível'} \n${nivel3 ? nivel3 : 'Nível 3 Inacessível'} `)
}
funcaoNivel1()


// ALERTA !!! PRÁTICA ALTAMENTE PERIGOSA !
// Escopo global automático sem uso das palavras reservadas let, const e var.

// Exemplo 1 (DevTools)
console.log('Exemplo 1')
let obj = {func: function(){a = 10; console.log(a)}}
obj.func()

a

// Exemplo 2
console.log('Exemplo 2')
obj.func2 = () => {b = 50; console.log(b)}
obj.func2()

b = 10;

obj.func2()


// Exemplo 3
console.log('Exemplo 3')
obj.func3 = () => {let c = 50; console.log(c)};
obj.func3() // retorna 50

c