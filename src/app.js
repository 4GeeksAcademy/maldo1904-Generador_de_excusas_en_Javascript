/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  //declaro mis datos
  //           0              1            2             3        INDICE
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function Excusa() {
    //Logica   Numero entero (redondeado a un numero menor). Numero alaeatorio. Tamaño especifico
    let quien = Math.floor(Math.random() * who.length);
    let accion = Math.floor(Math.random() * action.length);
    let que = Math.floor(Math.random() * what.length);
    let cuando = Math.floor(Math.random() * when.length);

    //Lo que regresa
    return (
      who[quien] + " " + action[accion] + " " + what[que] + " " + when[cuando]
    );
  }

  // Establezco la excusa generada en el elemento con el id #excuse
  document.querySelector("#excuse").innerHTML = Excusa();
};
