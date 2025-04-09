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



  const cambioColor = [header, numero, footer]

  if (positionSuits == "♦" || positionSuits == "♥") {
    cambioColor.forEach(element => {
      element.classList.add("text-danger");
      element.classList.remove("text-dark")
    })
  } else {
    cambioColor.forEach(element => {
      element.classList.add("text-dark");
      element.classList.remove("text-danger")
    })
  }
}
