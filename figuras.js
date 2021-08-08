// Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm cuadrados");
console.groupEnd();

// Código del triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTrinagulo = 5.5;
console.log(
  `Los lados del triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`
);

const perimetroTriangulo = (ladoTriangulo1 + ladoTriangulo2 + baseTriangulo);
console.log(`El perimetro del triangulo es ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTrinagulo) / 2;
console.log(`El área del triangulo es ${areaTriangulo}cm^2`);
console.groupEnd();

//Código del circulo
console.group("Circulo");
// Radio
const radioCirculo = 4;
console.log(`El radio del circulo es ${radioCirculo}cm`);
// Diametro
const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del circulo es ${diametroCirculo}cm`);
// PI
const PI = Math.PI;
console.log(`PI es igual a ${PI}`);
// Circunferencia
const perimetroCirculo = PI * diametroCirculo;
console.log(`El perimetro del circulo es ${perimetroCirculo}cm`);
// Área
const araCirculo = (radioCirculo * radioCirculo) * PI;
console.log(`El area del circulo es ${araCirculo}cm^2`);

console.groupEnd();