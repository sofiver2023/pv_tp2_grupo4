const duplicar = (arr) => {
  return arr.map(num => num * 2);
};

const btnGenerar = document.getElementById("btnGenerar");
const btnDuplicar = document.getElementById("btnDuplicar");
const inputsDiv = document.getElementById("inputs");
const resultado = document.getElementById("resultado");

btnGenerar.addEventListener("click", () => {
    inputsDiv.innerHTML = "";
    let cantidad = Number(document.getElementById("cantidad").value);

    if (isNaN(cantidad) || cantidad <= 0) {
        resultado.innerText = "Ingrese una cantidad válida.";
        return;
    }

    for (let i = 0; i < cantidad; i++) {
        let input = document.createElement("input");
        input.type = "number";
        input.placeholder = `Número ${i + 1}`;
        input.className = "numInput";
        inputsDiv.appendChild(input);
        inputsDiv.appendChild(document.createElement("br"));
    }

    btnDuplicar.style.display = "inline";
});

btnDuplicar.addEventListener("click", () => {
    let valores = [];
    let inputs = document.querySelectorAll(".numInput");

    inputs.forEach(input => {
        let valor = Number(input.value);
        if (!isNaN(valor)) {
        valores.push(valor);
        }
    });

    if (valores.length === 0) {
        resultado.innerText = "Debe ingresar al menos un número válido.";
        return;
    }

    let duplicados = duplicar(valores);
    resultado.innerText = `Original: [${valores.join(", ")}] 
    Duplicado: [${duplicados.join(", ")}]`;
});
