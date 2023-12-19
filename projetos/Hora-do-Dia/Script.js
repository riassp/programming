function carregar(){
    var msg = window.document.getElementById('msg')
    var msg2 = window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        msg2.innerHTML = 'Bom Dia!'
        //Bom Dia!
        img.src = 'Imagens/Manha.jpg'
        window.document.body.style.backgroundColor = '#e2cd9f'
    } else if(hora >= 12 && hora <= 18){
        msg2.innerHTML = 'Boa Tarde!'
        //Boa Tarde!
        img.src = 'Imagens/Tarde.jpg'
        window.document.body.style.backgroundColor = '#E7AC22'
    } else{
        msg2.innerHTML = 'Boa Noite!'
        //Boa Noite!
        img.src = 'Imagens/Noite.jpg'
        window.document.body.style.backgroundColor = '#0D0D0D'
    }
}
