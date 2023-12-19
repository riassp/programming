function gerar(){
    let num = document.querySelector('input#txtn')
    let tabu = document.getElementById('tabsel')
    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        let n = Number(num.value)
        tabu.innerHTML = ''
        for(var c = 1; c <= 10; c++){
            let option = document.createElement('option')
            option.text = `${n} x ${c} = ${n*c}`
            option.value = `tabu${c}`
            tabu.appendChild(option)
        }
    }
}