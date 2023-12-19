let num = [5, 8, 2, 9, 3] // Isso é um array ou vetor ou variável composta.
num.push(1) // Adiciona o número que está dentro do parentêses na pos que tiver liberada.
num.sort() // Organiza do Menor para o Maior mas depende das primeiras casas decimais.
console.log(num)
console.log(`O vetor tem ${num.length} posições`) // Length é para ver quantas casas existem no num(começa com 0 mas se você contar cortando o 0 da 6).
console.log(`O primeiro valor do vetor é ${num[1]}`) // Como começa com 0 então a pos 1 é 2.
let pos = num.indexOf(8) // Vai procurar o valor 8 no vetor e se achar vai te dar a pos dele.
if(pos == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}
