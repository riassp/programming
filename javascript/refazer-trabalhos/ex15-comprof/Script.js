function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')// Masculino fica com [0] e Feminino com [1].
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')// Criou um elemento(Uma tag) que é o img.
        img.setAttribute('id', 'foto')// Deu uma id chamada foto para o img que acabou de ser criado.
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança.
                img.setAttribute('src', 'images/menino.png')
            }else if(idade < 21){
                // Jovem.
                img.setAttribute('src', 'images/homem-jovem.png')
            }else if(idade < 50){
                //Adulto.
                img.setAttribute('src', 'images/homem.png')
            } else{
                //Idoso.
                img.setAttribute('src', 'images/idoso.png')
            }
        } else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'images/menina.png')
                //Criança.
            }else if(idade < 21){
                img.setAttribute('src', 'images/mulher-jovem.png')
                //Jovem.
            }else if(idade < 50){
                img.setAttribute('src', 'images/mulher.png')
                //Adulta.
            }else{
                img.setAttribute('src', 'images/idosa.png')
                //Idosa.
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)// Não precisa usar ''.
    }
}