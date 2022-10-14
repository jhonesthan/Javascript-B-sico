// Aula 23 & 24.1 - JSON & Métodos de string

//  --- Métodos depreciados que interferem diretamente no DOM
// String.prototype.anchor()
// String.prototype.big()
// String.prototype.blink()
// String.prototype.bold()
// String.prototype.fixed()
// String.prototype.fontcolor()
// String.prototype.fontsize()
// String.prototype.italics()
// String.prototype.link()
// String.prototype.small()
// String.prototype.sub()
// String.prototype.sup()

// ---  Métodos menos utilizados
// String.prototype.codePointAt()
// String.fromCodePoint()
// String.prototype.normalize()
// String.prototype.localeCompare()
// String.prototype.toLocaleLowerCase()
// String.prototype.toUpperCase()

// ---  Métodos de comparação e verificação
// Math();
// search();
// matchall();

String.prototype.match() // retorna array
/* um objeto de expressão regular. Se regexp não for uma RegExp,
   o mesmo será convertido para uma nova Regexp usando o new RegExp(regexp).*/

   // Se você não fornecer nenhum parâmetro ao usar o método match(), voçê obterá um Array com uma string vazia ["".]

const str = "Para mais informações, veja o capítulo 3.4.5.1";
const re = /(capítulo \d+(\.\d)*)/i;
const found = str.match(re);
console.log(found);