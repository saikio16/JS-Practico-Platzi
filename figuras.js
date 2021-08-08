// Código del cuadrado

//Perímetro
function perimetroCuadrado(lado){
  return (lado * 4);
}
//Área
function areaCuadrado(lado){
  return (lado * lado);
}

// Código del triangulo

//Perímetro
function perimetroTriangulo(lado1, lado2, base){
  return lado1 + lado2 + base;
}
//Área
function areaTriangulo(base, altura){
  return (base * altura) / 2;
}

//Código del circulo

// // Radio
function diametroCirculo(radio){
  return radio * 2;
}
// PI
const PI = Math.PI;
//Perímetro
function perimetroCirculo(radio){
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
//Área
function areaCirculo(radio){
  return (radio * radio) * PI;
}

// Aquí interactuamos con el HTML

// Cuadrado
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
