function TocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}



//constante = Lista dos botões
const ListaDeSons = document.querySelectorAll('.tecla');

//variavel = 0 fixo
let Contador = 0;

//enquanto - conição
while (Contador < ListaDeSons.length) {
   //acessando um elemento da lista 
   ListaDeSons[Contador].onclick = tocar('TocaSomPom');
   //mudei o valor da variavel
    Contador = Contador + 1;
   //console ta onversando comigo
   console.log(Contador);
} 


