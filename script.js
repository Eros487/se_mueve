//let edad = 18;

//console.log("Tu edad es: " + edad + " años");

//console.log(`Tienes ${edad} años`);

let cancion = document.getElementById("parrafoDos");
let inicio = true;
let frase = 0;
let tamañoLetra = 0.5;
let letra = [
    "Hoy volví",
    "A dormir en nuestra cama, y todo sigue igual",
    "El aire y nuestros gatos, nada cambiará",
    "Difícil olvidarte estando aquí, ah",
    "Te quiero ver",
    "Aún te amo y creo que hasta más que ayer",
    "La hiedra venenosa no te deja ver",
    "me siento mutilada y tan pequeña, ah"
]


cancion.addEventListener("click",() => {
    cancion.innerText = letra[frase];
    cancion.style.fontSize = `${tamañoLetra}em`;
    if(frase < letra.length - 1) {
    frase += 1;
    tamañoLetra += 1;
    }
    

})



