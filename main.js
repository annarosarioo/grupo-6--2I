function TocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

//constante = Lista dos botões
const ListaDeSons = document.querySelectorAll('.tecla');

//variavel = 0 fixo
let Contador = 0;

//enquanto-condição
while (Contador < ListaDeSons.length) {
   //acessando um elemento da lista 
   Lista[Contador].onclick = function () {
Tocar ("#som_tecla_pom")
   }
   const classe = lista[Contador].classList[1];

   console.log(classe);
    Contador = Contador + 1;

   console.log(Contador);
} 


