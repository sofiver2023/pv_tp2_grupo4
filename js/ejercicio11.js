const dividir= () => {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    if (isNaN(a) || isNaN(b)) {
    document.getElementById("resultado").innerText = "Ingrese números válidos.";
    } else if (b === 0) {
    document.getElementById("resultado").innerText = "No se puede dividir por cero.";
    } else {
    document.getElementById("resultado").innerText = "Consumo de combustible por kilómetro.: " + (a / b);
    }
}
