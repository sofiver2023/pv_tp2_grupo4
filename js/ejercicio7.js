// Ejercicio 7: Nombres y el más largo
const gestionarNombres = () => {
    // Array con los nombres solicitados
    const nombres = ["Paola", "Sofia", "Jonatan", "Federico", "Victoria"];
    let nombreMasLargo = "";

    console.log("Lista de nombres:");
    // Recorrer el array para mostrar los nombres y buscar el más largo
    nombres.forEach(nombre => {
        console.log(nombre);
        
        // Comparamos el largo de cada nombre
        if (nombre.length > nombreMasLargo.length) {
            nombreMasLargo = nombre;
        }
    });

    console.log(`El nombre más largo del array es: ${nombreMasLargo}`);
};

gestionarNombres();