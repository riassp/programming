function contar(){
    let ini = document.getElementById('txtn')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar.'
    }else{
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.innerHTML = 'Contando: <br>'
        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1.')
            p = 1
        }

        // Contagem Crescente.
        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} `
            }
        }

        // Contagem Decrescente.
        if(i > f){
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} `
            }
        }
    }
}
    
