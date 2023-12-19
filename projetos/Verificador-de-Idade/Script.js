function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = window.document.getElementById('txtano')
  var res = document.getElementById('res')

  if(fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked){
      gênero = 'homem'
      if(idade >= 0 && idade < 10){
        //Criança
        img.setAttribute('src', 'bebe-menino.png')
      } else if(idade < 21){
        //Jovem
        img.setAttribute('src', 'jovem-homem.png')
      } else if(idade < 50){
        // Adulto
        img.setAttribute('src', 'homem.png')
      } else {
        //Idoso
        img.setAttribute('src', 'idoso.png')
      }
    } else if(fsex[1].checked){
      gênero = 'mulher'
      if(idade >= 0 && idade < 10){
        //Criança
        img.setAttribute('src', 'bebe-menina.png')
      } else if(idade < 21){
        //Jovem
        img.setAttribute('src', 'jovem-mulher.png')
      } else if(idade < 50){
        // Adulta
        img.setAttribute('src', 'mulher.png')
      } else {
        //Idosa
        img.setAttribute('src', 'idosa.png')
      }
    }
    res.style.textAlign = 'center'
    
    if(gênero == 'homem'){
      res.innerHTML = `Detectamos um ${gênero} com ${idade}`
    } else if(gênero == 'mulher'){
      res.innerHTML = `Detectamos uma ${gênero} com ${idade}`
    }
    res.appendChild(img)
  }
}