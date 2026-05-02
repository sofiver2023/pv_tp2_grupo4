const btnEvaluar = document.getElementById("btnEvaluar");

const evaluar = () => {
    const a = Number(document.getElementById("num").value);

    if (a % 2 === 0) {
        document.getElementById("resultado").innerText = "El número ingresado es PAR";
    } else {
        document.getElementById("resultado").innerText = "El número ingresado es IMPAR";
    }
};


btnEvaluar.addEventListener('click', evaluar);
