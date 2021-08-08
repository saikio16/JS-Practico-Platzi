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

// Triangulo
function calcularPerimetroTriangulo(){
  const input1 = document.getElementById("InputTriangulo1");
  const value1 = parseFloat(input1.value);
  
  const input2 = document.getElementById("InputTriangulo2");
  const value2 = parseFloat(input2.value);
  
  const input3 = document.getElementById("InputTriangulo3");
  const value3 = parseFloat(input3.value);

  const perimetro = perimetroTriangulo(value1, value2, value3);
  alert(perimetro);
}

function calcularAreaTriangulo(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

//Circulo
function calcularPerimetroCirculo(){
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

function calcularAreaCirculo(){
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const area = areaCirculo(value);
  alert(area);
}