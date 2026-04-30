// Ejercicio 8: Gestión de notas
const gestionarNotas = () => {
    // Declarar un array con 10 notas
    const notas = [8, 4, 9, 6, 3, 7, 5, 10, 2, 6];
    let suma = 0;
    let cantidadAprobados = 0;

    console.log("--- Listado de todas las notas ---");
    notas.forEach(nota => {
        console.log(nota); // a) Mostrar cada nota
        suma += nota;
        if (nota >= 6) {
            cantidadAprobados++; // e) Contar aprobados
        }
    });

    // b) Mostrar aprobadas
    const aprobadas = notas.filter(n => n >= 6);
    console.log(`Notas aprobadas: ${aprobadas.join(", ")}`);
    
    // c) Mostrar desaprobadas
    const desaprobadas = notas.filter(n => n < 6);
    console.log(`Notas desaprobadas: ${desaprobadas.join(", ")}`);
    
    // d) Calcular el promedio
    const promedio = suma / notas.length;
    console.log(`El promedio general es: ${promedio}`);
    
    // e) Cantidad de aprobados
    console.log(`Total de alumnos aprobados: ${cantidadAprobados}`);
};

gestionarNotas();