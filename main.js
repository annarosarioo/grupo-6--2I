function TocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

//constante = Lista dos botões
const ListaDeSons = document.querySelectorAll('.tecla');
let Contador = 0;

   const classe = ListaDeSons[Contador].classList[1];
   //console.log(classe);

   const idSom = '#som_${classe}';
   //console.log(idSom);

 
   ListaDeSons[Contador].onclick = function () {
     tocar ("#som_tecla_toim")
   }

   Contador = Contador + 1;
    //console.log(Contador);
   
    tecla.onkeydown = function (evento){ 
      tecla.classList.add('ativa');
      console.log(evento.code === 'Space' || evento.code === 'Enter');
      
    }
    

   tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
 }
} 
