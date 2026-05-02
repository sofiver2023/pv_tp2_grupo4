const mostrarArreglo = (arr) => {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; 

    arr.forEach(num => {
        let p = document.createElement("p");
        p.innerText = num;
        resultadoDiv.appendChild(p);
    });
}

const btnGenerar = document.getElementById("btnGenerar");
const btnMostrar = document.getElementById("btnMostrar");
const inputsDiv = document.getElementById("inputs");

btnGenerar.addEventListener("click", () => {
    inputsDiv.innerHTML = ""; 
    let cantidad = Number(document.getElementById("cantidad").value);

    if (isNaN(cantidad) || cantidad <= 0) {
        document.getElementById("resultado").innerText = "Ingrese una cantidad válida.";
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

    btnMostrar.style.display = "inline";
});

btnMostrar.addEventListener("click", () => {
    let valores = [];
    let inputs = document.querySelectorAll(".numInput");

    inputs.forEach(input => {
        let valor = Number(input.value);
        if (!isNaN(valor)) {
        valores.push(valor);
        }
    });

    if (valores.length === 0) {
        document.getElementById("resultado").innerText = "Debe ingresar al menos un número válido.";
        return;
    }

    mostrarArreglo(valores);
});
