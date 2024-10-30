


const button = document.querySelector("button");
const caixaResultado = document.getElementById("resultado");
let resultado;

button.addEventListener("click", () => {

const valor1 = Number(document.getElementById("valor1").value);
const valor2 = Number(document.getElementById("valor2").value);
const operacao = document.getElementById("operacao").value;

resultado = valor1 + valor2
if (operacao === "+") {
    resultado = valor1 + valor2
} else if(operacao === "-") {
    resultado = valor1 - valor2
} else if (operacao === "*") {
    resultado = valor1 * valor2
} else  {
    resultado = valor1 / valor2
}

switch (operacao) {
    case "+":
        esultado = valor1 + valor2;
        break;

    case "-":
        resultado = valor1 - valor2;
        break;

        case "*":
            resultado = valor1 * valor2;
            break;

            default:
        resultado = valor1 / valor2;
}


caixaResultado.innerHTML = resultado 

});


