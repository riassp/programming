var LampadaQuebrada = false;

function double(){
    let img = document.querySelector('#img')
    img.src = "images/quebrada.jpg"
    let botaoL = document.querySelector('#botaoLigar')
    let botaoD = document.querySelector('#botaoDesligar')
    botaoL.disabled = true;
    botaoD.disabled = true;
    LampadaQuebrada = true;
}


function ligar(){
    let img = document.querySelector('#img')
    img.src = "images/ligada.jpg"
}

function secundaria(){
    if(!LampadaQuebrada){
         document.getElementById("img").src = "images/ligada.jpg";
    }
}

function original(){
    if(!LampadaQuebrada){
        document.getElementById("img").src = "images/desligada.jpg";
    }
}

function desligar(){
    let img = document.querySelector('#img')
    img.src = "images/desligada.jpg"
}