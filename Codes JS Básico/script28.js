// This em JS - aula 16

// chamar o this diretamente no console nos traz o objeto global do contexto em que o Javascript está executando
// exemplo para p 'devtools'
console.log(this.document === document)

// Em navegadores Web, o obejto windows é também o obejto global:
console.log(this === window); //true

this.a = 22;
console.log(window.a)

// Quando não estiver no modo estrito o this apontará para o objeto global

function thisNaoEstrito () {'use strict'; console.log(this);}

// Em modo estrito o valor this permanece sej qual for o definido ao entrar no contexto da execução, a seguir,
// this por padrão será indefinido (underfined)
function thisEstrito() { 'use strict'; console.log(this)} 


// Lembrando que ainda não são arrow functions, pois ela têm uma particularidade
// quanto ao this que será mostrador em breve.
// exemplo com método de um objeto 
const o = {
    prop: 100,
    f: function(){
        return this.prop
    }
};
console.log(o.f())

// Funções Arrow (seta)
// nas arrow functions o this é definido lexicalmente, isto é: seu valor é 
// definido pelo contexto de execução onde está inserido. Em um código global,
// this assume o objeto global

// ---------- Contexto de criação global
const arrowFuntionsThis = () => {console.log(this)} // aponta para o window


// ---------- Contexto de criação: Objetos // errado!
const arrowfuntionsThis = {
    prop: 150,
    arrow: () => {console.log(this)}
}

// ---------- Contexto de criação // Correto!
const objt = {
    exemplo1: "Exemplo",
    mastraThis: function() {
        const f = (() => this) ()
        console.log(f) //IIFE
// ou 
// const f = (() => this)() 
// console.log( )
    }
}

// código feito para ser executado no DevTools