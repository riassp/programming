var imc = 18.7

if(imc < 18.5){
    res.innerHTML = `${nome} seu IMC é ${imc} e você está abaixo do peso.`
}else if(imc <= 24.9){
    res.innerHTML = `${nome} seu IMC é ${imc} e você está no peso ideal, parabéns!.`
}else if(imc == 25 && imc <= 29.9){
    res.innerHTML = `${nome} seu IMC é ${imc} e você está com sobrepeso.`
}else{
    res.innerHTML = `${nome} seu IMC é ${imc} e você está com obesidade`
}