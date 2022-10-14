// Vamos supor que a linha do vesturário tenha sido unificada
// E para que não haja erros de uso por meio dos funcionários, os valores tenham sido mantidos
// Veja como ficaria o código

const item =5

switch (item) {

    case 1:
        console.log('Item 1 - setor de brinquedos')
        break
    case 2:
        console.log('Item 2 - setor de maquiagem')
        break
    case 3:
    case 4:
    case 5:
        console.log('Item 5 - setor de roupas')
        break
    case 6:
        console.log('Item 3 - setor de vestuário')
        break
    default:
        console.log('Numero informado é iválido')
}