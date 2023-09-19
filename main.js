function TocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}



//constante = Lista dos botões
const ListaDeSons = document.querySelectorAll('.tecla');

//variavel = 0 fixo
let Contador = 0;

//enquanto - conição
while (Contador < 9) {
   //acessando um elemento da lista 
   ListaDeSons[Contador].onclick = TocaSomPom;
   //mudei o valor da variavel
    Contador = Contador + 1;
   //console ta onversando comigo
   console.log(Contador);
} 


