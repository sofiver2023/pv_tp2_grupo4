const paises = document.getElementById("paises");
const capitales = document.getElementById("capitales");

const cambiarCapital = () => {
    capitales.value = paises.value;
    
    const nombrePais = paises.options[paises.selectedIndex].text;
    const nombreCapital = capitales.options[capitales.selectedIndex].text;
    console.log("País: " + nombrePais + " - Capital: " + nombreCapital);
};

paises.addEventListener("change", cambiarCapital);
export { cambiarCapital };
