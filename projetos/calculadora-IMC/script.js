let nome = document.getElementById('inputN')
let alt = document.querySelector('#inputA')
let peso = document.querySelector('#inputP')
let res = document.querySelector('#res')

function calcular(){
if(nome.value.length == 0 || alt.value.length == 0 || peso.value.length == 0){
    window.alert('Preencha os dados para que possamos fazer o cálculo!')
}else{
    let p = Number(peso.value)
    let a = Number(alt.value) ** 2
    let imc = p / a
    if(imc < 18.5){
        res.innerHTML = `${nome.value} seu IMC é ${imc} e você está abaixo do peso.`
    }else if(imc <= 24.9){
        res.innerHTML = `${nome.value} seu IMC é ${imc} e você está no peso ideal, parabéns!`
    }else if(imc <= 29.9){
        res.innerHTML = `${nome.value} seu IMC é ${imc} e você está com sobrepeso.`
    }else{
        res.innerHTML = `${nome.value} seu IMC é ${imc} e você está com obesidade.`
    }
}

}
