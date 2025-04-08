import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");



  let suits = ["♦", "♥", "♠", "♣"];
  let positionSuits = suits[Math.floor(Math.random() * 4)]

  let valorCarta = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
  let cartaRamdom = valorCarta[Math.floor(Math.random() * valorCarta.length)]


  let header = document.querySelector(".header");

  header.innerHTML = positionSuits

  let numero = document.querySelector(".numero");
  numero.innerHTML = cartaRamdom


  let footer = document.querySelector(".footer")
  footer.innerHTML = positionSuits

  const CambioColor = [header, numero, footer];

  // Comprobamos si la pinta es Corazón (♥) o Diamante (♦)
  if (positionSuits === "♥" || positionSuits === "♦") {
    // Si es roja, añadimos la clase 'text-danger' (rojo de Bootstrap)
    // y nos aseguramos de quitar 'text-dark' si estaba antes.
    console.log("Pinta roja detectada:", positionSuits);
    CambioColor.forEach(element => {
      element.classList.remove("text-dark"); // Quita negro
      element.classList.add("text-danger");  // Añade rojo
    });
  } else {
    // Si no es roja (es Pica ♠ o Trébol ♣), añadimos 'text-dark' (negro de Bootstrap)
    // y nos aseguramos de quitar 'text-danger' si estaba antes.
    console.log("Pinta negra detectada:", positionSuits);
    CambioColor.forEach(element => {
      element.classList.remove("text-danger"); // Quita rojo
      element.classList.add("text-dark");     // Añade negro
    });
  }


}
