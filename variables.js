//Array con las bebidas

const bebidas = [
  { id: 1, nombre: "Tinto",             precio: 2000, cafe: 10, azucar: 5, agua: 150 },
  { id: 2, nombre: "Cafe con leche",    precio: 3000, cafe: 10, azucar: 5, leche: 100 },
  { id: 3, nombre: "Te",                precio: 2000, te: 10,   azucar: 5, agua: 200 },
  { id: 4, nombre: "Mocaccino",         precio: 4000, cafe: 10, chocolate: 15, leche: 100, agua: 50 },
  { id: 5, nombre: "Cafe descafeinado", precio: 2500, cafeDescafeinado: 10, azucar: 5, agua: 150 }
];
// Inventario
let cafeGr = 10000;
let cafeDescafeinadoGr = 5000;
let chocolateEnPolvoGr = 5000;
let teGr = 5000;
let azucarGr = 2500;
let lecheGr = 10000;
let aguaMl = 1000000;

let vasos = 150;

const AzucarGr = 5; 

// Dinero

let moneda100 = 100;
let moneda200 = 100;
let moneda500 = 50;
let moneda1000 = 50;

let billete2000 = 100;
let billete5000 = 100;
let billete10000 = 50;

// Saldo

let saldo = 5000;

// Precios (se toman del array bebidas)

const tintoPrecio = bebidas[0].precio;
const cafeConLechePrecio = bebidas[1].precio;
const tePrecio = bebidas[2].precio;
const mocaccinoPrecio = bebidas[3].precio;
const cafeDescafeinadoPrecio = bebidas[4].precio;

// Selecionar bebida

let menu =parseInt(prompt("Elige tu bebida"));

 switch (menu) {
    case 1:
      
    // Proceso tinto
    
    alert("Tinto")

if (saldo >= tintoPrecio && cafeGr >= 10 && azucarGr >= 5 && aguaMl >= 150 && vasos >= 1 )

    // Descontar ingredientes 
    {
        cafeGr = cafeGr - 10;
         azucarGr = azucarGr - 5;
          aguaMl = aguaMl - 150;
           vasos = vasos - 1
           cobrarBebida(tintoPrecio)
    }

else {
    alert( "No se puede preparar el tinto sorry");
    }

        break;

    case 2:
    
    // Proceso Cafe con leche

    alert("Cafe con leche")

if (saldo >= cafeConLechePrecio && cafeGr >= 10 && azucarGr >= 5 && lecheGr >= 100 && vasos >= 1)
    // Descontar ingredientes
    {
        cafeGr = cafeGr - 10;
         azucarGr = azucarGr - 5;
          lecheGr = lecheGr - 100;
           vasos = vasos - 1
           cobrarBebida(cafeConLechePrecio)
    }

else{ 
    alert( "No se puede preparar el cafe con leche sorry");
    }

        break;

    case 3:

    // Proceso Te

    alert("Te")

if (saldo >= tePrecio && teGr >= 10 && azucarGr >= 5 && aguaMl >= 200 && vasos >= 1)
    // Descontar ingredientes
    {
        teGr = teGr - 10;
         azucarGr = azucarGr - 5;
          aguaMl = aguaMl - 200;
           vasos = vasos - 1 
           cobrarBebida(tePrecio)
    }

else {
    alert( "No se puede preparar el te sorry");
    }

    break;

    case 4:

        // Proceso Moccacino

        alert("Mocaccino")

if (saldo >= mocaccinoPrecio && cafeGr >= 10 && chocolateEnPolvoGr >= 15 && aguaMl >= 50 && lecheGr >= 100 && vasos >= 1)
    // Descontar ingredientes
    {
        cafeGr = cafeGr - 10;
         azucarGr = azucarGr - 5;
          aguaMl = aguaMl - 50;
           lecheGr = lecheGr - 100; 
            vasos = vasos - 1
            cobrarBebida(mocaccinoPrecio)
    }

else {
    alert("No se puede preparar el mocaccino sorry");
    }

    break;

    case 5:

        // Proceso Cafe Descafeinado

        alert("Cafe descafeinado")

if (saldo >= cafeDescafeinadoPrecio && cafeDescafeinadoGr >= 10 &&  azucarGr >= 5 && aguaMl >= 150 && vasos >= 1)
    // Descontar ingredientes
    {
        cafeDescafeinadoGr = cafeDescafeinadoGr - 10;
         azucarGr = azucarGr - 5;
          aguaMl = aguaMl - 150;
           vasos = vasos - 1
           cobrarBebida(cafeDescafeinadoPrecio)
    }

else {
    alert("No se puede preparar el cafe descafeinado sorry") ;
    }

    break;

    default:

        alert ("Ese producto no esta en el menu")
        break;
 }

 // Cobrar

 function cobrarBebida(precio) {

    alert("El total de su compra es: $" + precio);

    let pago = parseInt(prompt("¿Cuánto dinero va a ingresar?"));

    if (pago >= precio) {

        let cambio = pago - precio;

        saldo = saldo + pago - precio;

        alert("Pago realizado correctamente");
        alert("Su cambio es: $" + cambio);

        return true;

    } else {

        alert("Dinero insuficiente. No se puede preparar la bebida");

        return false;
    }
}
    
     
