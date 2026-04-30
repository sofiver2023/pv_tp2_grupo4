// Ejercicio 6: Array de edades y promedio
const mostrarPromedioEdades = () => {
    // Declarar array con al menos 8 edades distintas
    const edades = [21, 34, 19, 45, 28, 30, 22, 40];
    let suma = 0;

    console.log("Edades registradas:");
    // Recorrer el array y mostrar las edades
    edades.forEach(edad => {
        console.log(edad);
        suma += edad;
    });

    // Calcular y mostrar el promedio
    const promedio = suma / edades.length;
    console.log(`El promedio de las edades es: ${promedio}`);
};

mostrarPromedioEdades();