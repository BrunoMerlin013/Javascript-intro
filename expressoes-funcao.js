// declaracao de funcao

// function minhaFuncao(param) {
//     //bloco de codigo
// }

// minhaFuncao("param")


// expresao de funcao

// const soma = function(num1, num2) { return 1 + 1 }
// console.log(soma(1 + 1))

// diferença principal: HOISTING
// funçoes e var são "listadas" no topo do arquivo

console.log(apresentar())

function apresentar(){
    return "olá";
}

console.log(soma(1,1))
const soma = function (num1, num2) { return 1 + 1 }