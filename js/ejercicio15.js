const btnMes = document.getElementById('btnMes');
const resultado = document.getElementById('resultado');


const retornarMes = () => {

    const numero = Number(document.getElementById('numMes').value);

    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    if (numero >= 1 && numero <= 12) {
        let mes = meses[numero - 1];
        resultado.innerText = `Mes: ${mes}`;
    } else {
        resultado.innerText = `El número ingresado NO corresponde a un mes.`;
    }
}


btnMes.addEventListener('click', retornarMes);
