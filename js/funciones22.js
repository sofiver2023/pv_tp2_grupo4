const input = document.getElementById("texto");
const resultado = document.getElementById("resultado");

const reflejarTexto = (texto) => {
    resultado.textContent = texto;
};

input.addEventListener("input", (e) => reflejarTexto(e.target.value));
export { reflejarTexto };