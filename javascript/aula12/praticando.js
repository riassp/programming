var hora = 06
console.log(`Agora são exatamente ${hora} horas`)
if(hora < 5){
    console.log('Boa Madrugada!')
} else if(hora < 12){
    console.log('Bom Dia!')
} else if(hora <= 18){
    console.log('Boa Tarde!')
} else if(hora >= 19){
    console.log('Boa Noite!')
}