function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let iano = document.querySelector('input#txtano')
    let res = document.querySelector('div#res')
    let idade = ano - Number(iano.value)
    let img = document.getElementById('imagem')
    
    if(iano.value.length == 0 || Number(iano.value) > ano){
        window.alert('Verifique se colocou corretamente os dados.')
    } else{
        //let img = window.document.createElement('img')
        //img.setAttribute('id', 'fotos')
        let gênero = ''
        let fsex = document.getElementsByName('sex')
        if(fsex[0].checked){
            gênero = 'Homem'
            res.innerHTML = `Encontramos um ${gênero} com ${idade} anos.`
            if(idade >= 0 && idade < 12){
                img.src = 'menino.png'
            }else if(idade <= 20){
                img.src = 'jovem-homem.png'
            }else if(idade <= 50){
                img.src = 'adulto.png'
            } else{
                img.src  = 'idoso.png'
            }
        }
        if(fsex[1].checked){
            gênero = 'Mulher'
            res.innerHTML = `Encontramos uma ${gênero} com ${idade} anos.`
            if(idade >= 0 && idade < 12){
                img.src = 'menina.png'
            }else if(idade <= 20){
                img.src = 'jovem-mulher.png'
            }else if(idade <= 50){
                img.src = 'adulta.png'
            }else{
                img.src = 'idosa.png'
            }
        }
        res.appendChild(img)
    }
}