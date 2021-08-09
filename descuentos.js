// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioDescuento = 100 - descuento;
    const precioDescuento = (precio * porcentajePrecioDescuento) / 100;
    
    return precioDescuento;
}


function priceDiscount(){
    const inputPrice = document.getElementById("InputPrice")
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount")
    const discountValue = inputDiscount.value;
    
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerHTML = `El precio con descuento es: $${precioConDescuento}`
}



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioDescuento,
//     precioDescuento,
// })