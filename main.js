function TocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const ListaDeSons = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < 9) {
   ListaDeSons[0].onclick = TocaSomPom;
   Contador = Contador + 1;
   console.log(Contador);
}


