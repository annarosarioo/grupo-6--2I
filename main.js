function TocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

//constante = Lista dos botões
const ListaDeSons = document.querySelectorAll('.tecla');
let Contador = 0;

while (Contador < lista.lenght) {
   const classe = lista[Contador].classList[1];
   //console.log(classe);

   const idSom = '#som_${classe}';
   //console.log(idSom);

 
   lista[Contador].onclick = function () {
     tocar ("#som_tecla_toim")
   }

   Contador = Contador + 1;
    //console.log(Contador);
   
    tecla.onkeydown = function
    tecla.classList.add('ativa');

   tecla.onkeyup = function
    tecla.classList.remove('ativa');
 }
} 


