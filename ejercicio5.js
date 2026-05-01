const convertirTiempo = () => {
    const horas = 2;
    const minutos = 45;
    const totalSegundos = (horas * 3600) + (minutos * 60);
    console.log(`Horas: ${horas}`);
    console.log(`Minutos: ${minutos}`);
    console.log(`Total en segundos: ${totalSegundos} segundos`);
};

convertirTiempo();