function soma(numero1, numero2){
    return numero1 + numero2;
}

//console.log(soma(100, 13))
//console.log(soma(510, 200))
//console.log(soma(-90, 150))

// ORDEM DOS PARAMETROS  **ATENÇÃO A ORDEM DOS PARAMETROS NO CONSOLE.LOG**

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`
}

//console.log(nomeIdade("Bruno", 19))

//colocando a funçao soma dentro da função multiplica

function soma(numero1, numero2) {
    return numero1 + numero2;
}

function multiplica (numero1, numero2){
    return numero1 * numero2;
}

console.log(multiplica(soma(5, 5), soma(8, 8)))
                    //soma de 10  soma de 16 multiplicadas entre si
//se colocar apenas 1 parametro igualar o numero a 1 para nao ocorrer NaN

