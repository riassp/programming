

function double(){
    let img = document.querySelector('#img')
    img.src = "images/quebrada.jpg"
    let botaoL = document.querySelector('#botaoLigar')
    let botaoD = document.querySelector('#botaoDesligar')
    botaoL.disabled = true;
    botaoD.disabled = true;
}


function ligar(){

    let img = document.querySelector('#img')
    img.src = "images/ligada.jpg"
}

function hover1(){
    let img = document.querySelector('#img')
    img.src = "images/ligada.jpg"
}

function hover2(){
    let img = document.querySelector('#img')
    img.src = "images/desligada.jpg"
}

function desligar(){
    let img = document.querySelector('#img')
    img.src = "images/desligada.jpg"
}