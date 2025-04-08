import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");


  let suits = [ "♦", "♥", "♠", "♣"];

  let positionSuits = suits[Math.floor(Math.random()*4)]

  let numerosRandom = []

  console.log(positionSuits)


  let header = document.querySelector(".header");

  header.innerHTML= positionSuits

  console.log(header)



};
