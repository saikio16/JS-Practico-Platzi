// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");
function perimetroCuadrado(lado){
  return (lado * 4);
}
// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El área del cuadrado es: " + areaCuadrado + "cm cuadrados");
function areaCuadrado(lado){
  return (lado * lado);
}
console.groupEnd();

// Código del triangulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTrinagulo = 5.5;
// console.log(
//   `Los lados del triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`
// );

// const perimetroTriangulo = (ladoTriangulo1 + ladoTriangulo2 + baseTriangulo);
// console.log(`El perimetro del triangulo es ${perimetroTriangulo}cm`);
function perimetroTriangulo(lado1, lado2, base){
  return lado1 + lado2 + base;
}
// const areaTriangulo = (baseTriangulo * alturaTrinagulo) / 2;
// console.log(`El área del triangulo es ${areaTriangulo}cm^2`);
function areaTriangulo(base, altura){
  return (base * altura) / 2;
}
console.groupEnd();

//Código del circulo
console.group("Circulo");
// // Radio
// const radioCirculo = 4;
// console.log(`El radio del circulo es ${radioCirculo}cm`);
// // Diametro
// const diametroCirculo = radioCirculo * 2;
// console.log(`El diametro del circulo es ${diametroCirculo}cm`);
function diametroCirculo(radio){
  return radio * 2;
}
// // PI
const PI = Math.PI;
// console.log(`PI es igual a ${PI}`);
// // Circunferencia
// const perimetroCirculo = PI * diametroCirculo;
// console.log(`El perimetro del circulo es ${perimetroCirculo}cm`);
function perimetroCirculo(radio){
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
// // Área
// const araCirculo = (radioCirculo * radioCirculo) * PI;
// console.log(`El area del circulo es ${araCirculo}cm^2`);
function areaCirculo(radio){
  return (radio * radio) * PI;
}
console.groupEnd();


// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}