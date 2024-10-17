import "bootstrap";
import "./style.css";

let quien_sujeto = ["The dog", "My grandma", "The mailman", "My bird"];
let actividad = ["ate", "peed", "crushed", "broke"];
let que_cosa = ["my homework", "my phone", "the car"];
let cuando_se_hizo = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function Excusa() {
  let quien = Math.floor(Math.random() * quien_sujeto.length);
  let accion = Math.floor(Math.random() * actividad.length);
  let que = Math.floor(Math.random() * que_cosa.length);
  let cuando = Math.floor(Math.random() * cuando_se_hizo.length);

  return (
    quien_sujeto[quien] +
    " " +
    actividad[accion] +
    " " +
    que_cosa[que] +
    " " +
    cuando_se_hizo[cuando]
  );
}

window.onload = function() {
  document.querySelector("#excuse").innerHTML = Excusa();
  const boton = document.querySelector(".btn-generar");
  boton.addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = Excusa();
  });
};
