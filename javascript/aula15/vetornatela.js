let valores = [8, 1, 7, 4, 2, 9] // Array ou vetor ou variável composta.
valores.sort() // Organiza o Array de acordo com as Casas Decimais.

//console.log(valores) <-- Maneira Padrão para mostrar com tudo.

/*
Maneira Burra.
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

for(let pos=0; pos<valores.length; pos++){
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
} <-- Essa aqui você tem controle total para personalizar totalmente a saida mas esse não é simplificado.
*/

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} // Mesma funcionalidade de cima mas simplificado.