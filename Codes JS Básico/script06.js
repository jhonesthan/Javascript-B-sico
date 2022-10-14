// NULL and UNDEFINED

// Principal diferença entre NULL e UNDEFINED
// undefined é uma propriedade global (em outras palavras: variável o key do objeto global) que tem como
// valor seu próprio nome. Desde modo temos que UNDEFINED tem valor underfined

// Já null é um literal e não uma propriedade do objeto global. Para saber se um valor é null e nao undefined, 
// é sempre bom usar o operador de desigualdade escrita (===)


console.log(undefined == null)
console.log(typeof undefined)
console.log(typeof null)
console.log(undefined === null)
var foo = null;
console.log(typeof foo)