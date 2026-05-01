const gestionarNumeros = () => {
    const numeros = [];
    let suma = 0;

    const cantidad = parseInt(prompt("¿Cuántos números desea ingresar?"));

    for (let i = 0; i < cantidad; i++) {
        let num = parseInt(prompt(`Ingrese el número entero ${i + 1} de ${cantidad}:`));
        numeros.push(num);
        suma += num;
    }

    document.write(`<p>Números ingresados: <b>${numeros.join(", ")}</b></p>`);

    const promedio = suma / numeros.length;
    document.write(`<p>El promedio es: <b>${promedio}</b></p>`);
};

gestionarNumeros();