// Ejercicio 9: Saludo con prompt y document.write
const gestionarSaludo = () => {
    // Solicitar datos al usuario
    const apellido = prompt("Ingrese su apellido:");
    const nombre = prompt("Ingrese su nombre:");

    // Mostrar el mensaje en el cuerpo de la página
    document.write(`<h1>Hola ${nombre} ${apellido}</h1>`);
    document.write("<p>Bienvenido a Programación Visual</p>");
};

// Llamamos a la función para que se ejecute al abrir la página
gestionarSaludo();