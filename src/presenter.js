import sumar from "./sumador";
import multiplicar from "./multiplicador.js";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  const buttonId = event.submitter.id;

  let resultado;

  if (buttonId === "sumar-button") {
    resultado = sumar(firstNumber, secondNumber);
  } else if (buttonId === "multiplicar-button") {
    resultado = multiplicar(firstNumber, secondNumber);
  }

  div.innerHTML = "<p>Resultado: " + resultado + "</p>";
});