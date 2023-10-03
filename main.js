function TocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

//constante = Lista dos botões
const ListaDeSons = document.querySelectorAll('.tecla');
let Contador = 0;

while (Contador< ListaDeSons.length) {
  const tecla = ListaDeSons[Contador];
  const classe = tecla.classList[1];
   //console.log(classe);

   const idSom = `#som_${classe}`;
   //console.log(idSom);
 
   ListaDeSons[Contador].onclick = function () {
     TocaSomPom(idSom;)
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