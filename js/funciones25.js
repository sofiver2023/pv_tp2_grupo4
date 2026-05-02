const boton = document.getElementById("btnCambiarColor");
const colores = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "gray"];

const cambiarColorAleatorio = () => {
    const colorElegido = colores[Math.floor(Math.random() * colores.length)];
    
    document.body.style.backgroundColor = colorElegido;
    console.log("El color de fondo es: " + colorElegido);
};

boton.addEventListener("click", cambiarColorAleatorio);

export { cambiarColorAleatorio };