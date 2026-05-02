const radios = document.querySelectorAll('input[name="lenguaje"]');
const resultado = document.getElementById("resultado");

const mostrarSeleccion = (valor) => {
    resultado.textContent = valor;
    console.log("Seleccionado: " + valor);
};

radios.forEach(radio => {
    radio.addEventListener("change", (e) => mostrarSeleccion(e.target.value));
});

export { mostrarSeleccion };