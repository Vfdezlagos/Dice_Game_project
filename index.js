//funcion numero aleatorio.
function randomNumber(){
    return Math.floor((Math.random() * 6) + 1);
}


//funcion asignacion de imagen de dado segun numero.
function lanzarDado(num){
    let imagen;

    switch(num){
        case 1:
            imagen = "./images/dice1.png";
            break;
        
        case 2:
            imagen = "./images/dice2.png";
            break;

        case 3:
            imagen = "./images/dice3.png";
            break;
        
        case 4:
            imagen = "./images/dice4.png";
            break;

        case 5:
            imagen = "./images/dice5.png";
            break;
        
        case 6:
            imagen = "./images/dice6.png";
            break;
    }

    return imagen;
}

//contador de juegos
var numeroJuego = 0;


//limpieza del local storage
localStorage.clear();


//lanzar dados y almacenar resultados.
var botonLanzar = document.querySelector("#lanzarDados");

botonLanzar.addEventListener('click',function(){

    var valor1 = randomNumber();
    var valor2 = randomNumber();

    document.querySelector(".img1").setAttribute("src", lanzarDado(valor1));
    document.querySelector(".img2").setAttribute("src", lanzarDado(valor2));

    var heading = document.querySelector("h1");
    var results = document.querySelector("#resultados");

    if(valor1 > valor2){
    heading.innerHTML = "<img src='./images/bandera-roja.png' alt='bandera roja' width='100px' height='100px' /> Player 1 wins.";
    localStorage.setItem(numeroJuego, "player 1");
    } else if (valor1 < valor2) {
    heading.innerHTML = "Player 2 wins. <img src='./images/bandera-roja.png' alt='bandera roja' width='100px' height='100px' />";
    localStorage.setItem(numeroJuego, "player 2");
    } else {
    heading.innerText = "Draw!";
    localStorage.setItem(numeroJuego, "empate");
    }

    numeroJuego++;

    results.innerText = "";

    for (const [key, value] of Object.entries(localStorage)) {
        var br = document.createElement("br");
        results.append(key + ".- " + value);
        results.append(br);
    }

});





