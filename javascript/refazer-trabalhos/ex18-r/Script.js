

let num = document.getElementById('txtn')
let lista = document.getElementById('sel')
let res = document.querySelector('div#res')
let valores = []

function eNumero(n){
    if(Number(num.value) >= 1 && Number(num.value) <= 100){
        return true
    }else{
        return false
    }
}

function naLista(n, v){
    if(v.indexOf(Number(num.value)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(eNumero(num.value) && !naLista(num.value, valores)){
       valores.push(Number(num.value))
       let option = document.createElement('option')
       option.text = `Valor ${num.value} adicionado.`
       lista.add(option)
       res.innerHTML = ''
       num.value = ''
       num.focus()
    }else{
        window.alert('O número é inválido ou já está na lista.')
    }
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Por favor, coloque um número acima para finalizar!')
    }else{
        let tot = valores.length
        let maior = Math.max(...valores)
        let menor = Math.min(...valores)
        let soma = 0
       for(let i = 0; i < valores.length; i++){
        soma += valores[i]
       }
       let media = soma / valores.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor encontrado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor encontrado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}
