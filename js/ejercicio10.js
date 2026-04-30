const gestionarRepuestos = () => {
    const repuestos = ["Filtro de aceite", "Pastillas de freno", "Bujías", "Batería", "Amortiguadores", "Correa de distribución"];
    
    document.write(`<p>Cantidad total de categorías en stock: <b>${repuestos.length}</b></p>`);
    
    document.write("<h3>Listado de Repuestos:</h3>");
    document.write("<ul>");
    repuestos.forEach(item => {
        document.write(`<li>${item}</li>`);
    });
    document.write("</ul>");

    const busqueda = prompt("Ingrese el nombre del repuesto que desea buscar en el taller:");
    
    if (repuestos.includes(busqueda)) {
        document.write(`<p style='color: green;'>✅ El repuesto <b>${busqueda}</b> se encuentra en stock.</p>`);
    } else {
        document.write(`<p style='color: red;'>❌ El repuesto <b>${busqueda}</b> no está disponible actualmente.</p>`);
    }
};

gestionarRepuestos();