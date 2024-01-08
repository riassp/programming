/*
Função: Trecho de código que só é executado quando é chamado/invocado.

    Função Void (vazia)
    Função com Parâmetro(s)
    Função Return
    Função Arrow / Arrow Function


*/


/*
Chamada de função void pois não está retornando nada.

let valor = 20

function incremento(){ 
    valor += 30
}

incremento()
console.log(valor)
*/


/*
O parâmetro só pode ser usado dentro da função e pode ser mais de um parâmetro.

function soma(numero1, numero2){

    const somaDosNumeros = numero1 + numero2
    console.log(somaDosNumeros)

}

function subtração(numero1, numero2){

    const subDosNumeros = numero1 - numero2
    console.log(subDosNumeros)

}

soma(1450, 50)
subtração(1000, 7)

*/


/*

return vai retornar o valor para quem o chamou.

function soma(numero1, numero2){
    const somaDosNumeros = numero1 + numero2
    return somaDosNumeros
}

const meusNumeros = soma(4, 7)
const meusNumeros2 = soma(1000, 7)

console.log(meusNumeros)
console.log(meusNumeros2)

*/


/*

Arrow function é uma forma moderna de escrever uma função.

const multi = (numero1, numero2) => {

    const multipli = numero1 * numero2
    return multipli

}

const multiplica = multi(10, 50)

console.log(multiplica)

*/


/* Se eu escrever tudo numa mesma linha eu não vou precisar usar o return. É a mesma coisa de cima só que mais simplificado ainda.  */
const multi = (numero1, numero2) => numero1 * numero2

const multiplica = multi(10, 50)

console.log(multiplica)