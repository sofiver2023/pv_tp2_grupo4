const input = document.getElementById("texto");
const caja = document.getElementById("cajaTexto");

const verificarTexto = (texto) => {
    caja.textContent = texto;

    if (texto.length > 20) {
        caja.style.backgroundColor = "red";
    } else {
        caja.style.backgroundColor = "transparent";
    }
};

input.addEventListener("input", (e) => verificarTexto(e.target.value));

export { verificarTexto };