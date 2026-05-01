const calcularVolumen = () => {
    const radio = 4;
    const volumen = (4/3) * Math.PI * Math.pow(radio, 3);
    console.log(`El volumen de la esfera con radio ${radio} m es: ${volumen.toFixed(2)} m³`);
};

calcularVolumen();