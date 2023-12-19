function carregar(){
//let data = new Date()
//let hora = data.getHours()// Pegar hora do seu pc ou qualquer outro dispositivo.
let hora = 20
//assim você pode escolher a hora que você quiser.
let res = window.document.querySelector('div#res')
let msg2 = window.document.querySelector('div#msg2')
let img = window.document.querySelector('img#imagem')
msg2.innerHTML = `Agora são ${hora} horas.`

if(hora >= 00 && hora < 5){
    res.innerHTML = 'Boa Madrugada!'
    img.src = "images/Noite.jpg"
    window.document.body.style.backgroundColor = '#151516'
}else if(hora >= 5 && hora < 12){
    res.innerHTML = 'Bom Dia!'
    img.src = "images/Manha.jpg"
    window.document.body.style.backgroundColor = '#ff7f50'
}else if(hora >= 12 && hora < 19){
    res.innerHTML = 'Boa Tarde'
    img.src = "images/Tarde.jpg"
    window.document.body.style.backgroundColor = '#EED060'
}else{
    res.innerHTML = 'Boa Noite!'
    img.src = "images/Noite.jpg"
    window.document.body.style.backgroundColor = '#151516'
}


}