// Aula 18 - Debugger

const str1 = "Jhone"

console.log(str1);

const funcaoLegal =  (str) => {
    const retorno =  str + " é legal";
    return retorno;
}

const retornoFuncaoLegal = funcaoLegal(str1);

if(str1.length > 10) {
    console.log(retornoFuncaoLegal);
} else {
    console.log("Não deu pra executar funçãoLegal")
}