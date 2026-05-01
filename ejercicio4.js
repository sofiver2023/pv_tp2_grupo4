const calcularRectangulo = () => {
    const lado1 = 5;
    const lado2 = 3;
    const area = lado1 * lado2;
    const perimetro = 2 * (lado1 + lado2);
    console.log(`Lado 1: ${lado1} cm, Lado 2: ${lado2} cm`);
    console.log(`Área: ${area} cm²`);
    console.log(`Perímetro: ${perimetro} cm`);
};

calcularRectangulo();