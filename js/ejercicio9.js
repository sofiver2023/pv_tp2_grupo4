const gestionarDias = () => {
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    // Mostrar primer y último día en la página
    document.write(`<p>El primer día es: <b>${dias[0]}</b></p>`);
    document.write(`<p>El último día es: <b>${dias[dias.length - 1]}</b></p>`);

    // Pedir número al usuario
    const seleccion = parseInt(prompt("Ingrese un número del 1 al 7:"));

    if (seleccion >= 1 && seleccion <= 7) {
        document.write(`<p>Día seleccionado: <b>${dias[seleccion - 1]}</b></p>`);
    } else {
        document.write("<p style='color:red;'>Número fuera de rango.</p>");
    }
};

gestionarDias();