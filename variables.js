const tinto = "Tinto";
const cafeConLeche = "Cafe con leche";
const te = "Te";
const mocaccino = "Mocaccino";
const cafeDescafeinado = "Cafe descafeinado";

// Tinto
const cafe = 10;
const agua = 150;
const azucar = 5;
let tintoPrecio = 2000;

// Cafe con leche
const cafe = 10;
const leche = 100;
const azucar = 5;
let cafeConLechePrecio = 3000;

// Te
const te = 10;
const agua = 200;
const azucar = 5;
let tePrecio = 2000;

// Mocaccino
const cafe = 10;
const chocolate = 15;
const leche = 100;
const agua = 50;
let mocaccinoPrecio = 4000;

// Cafe descafeinado
const cafeDescafeinado = 10;
const agua = 150;
const azucar = 5;
let cafeDescafeinadoprecio = 2500;

// Inventario

let cafeGr = 10000;
let cafeDescafeinadoGr = 5000;
let chocolateEnPolvoGr = 5000;
let teGr = 5000;
let azucarGr = 2500;
let lecheGr = 10000;
let aguaMl = 1000000;

let vasos = 150;

// Dinero

let moneda100 = 100;
let moneda200 = 100;
let moneda500 = 50;
let moneda1000 = 50;

let billete2000 = 100;
let billete5000 = 100;
let billete10000 = 50;

// Saldo

let saldo = 2000;

// Selecionar bebida

 // switch para un futuro switch (key) {case 1:break;case 2:break;case 3:break;case 4:breakcase 5:break;;default:break;

// Proceso tinto 

if (saldo >= tintoPrecio && cafeGr >= 10 && azucarGr >= 5 && aguaMl >= 150 && vasos >= 1 &&)

    // Descontar ingredientes 
    {
        cafeGr = cafeGr - 10 && azucarGr = azucarGr - 5 && aguaMl = aguaMl - 150 && vasos = vasos - 1
        console.log("Preparando tinto")
    }

else {
    console.log( "No se puede preparar el tinto sorry");
    }

    // Calcular vueltas
    let vueltas = saldo - tintoPrecio;

// Proceso Cafe con leche

if (saldo >= cafeConLechePrecio && cafeGr >= 10 && azucarGr >= 5 && aguaMl >= 150 && vasos >= 1)
    // Descontar ingredientes
    {
        cafeGr = cafeGr - 10 && azucarGr = azucarGr - 5 && lecheMl = lecheMl - 150 && vasos = vasos - 1
        console.log("Preparando Cafe con leche")
    }

else{ 
    console.log( "No se puede preparar el cafe con leche sorry");
    }

    // Calcular vueltas
    let vueltas = saldo - cafeConLechePrecio;

// Proceso Te

if (saldo >= tePrecio && teGr >= 10 && azucarGr >= 5 && aguaMl >= 200 && vasos >= 1)
    // Descontar ingredientes
    {
        teGr = teGr - 10 && azucarGr = azucarGr - 5 && aguaMl = aguaMl - 200 && vasos = vasos - 1 
        console.log("Preparando Te")
    }

else {
    console.log( "No se puede preparar el te sorry");
    }

    // Calcular vueltas
    let vueltas = saldo - tePrecio;

// Proceso Moccacino

if (saldo >= mocaccinoPrecio && cafeGr >= 10 && chocolateGr >= 15 && aguaMl >= 50 && lecheMl >= 100 && vasos >= 1)
    // Descontar ingredientes
    {
        cafeGr = cafeGr - 10 && azucarGr = azucarGr - 5 && aguaMl = aguaMl - 50 && lecheMl = lecheMl - 100 && vasos = vasos - 1
        console.log("Preparando Mocaccino")
    }

else {
    console.log ("No se puede preparar el mocaccino sorry");
    }

    // Calcular vueltas
    let vueltas = saldo - mocaccinoPrecio;

    // Proceso Cafe Descafeinado

if (saldo >= cafeDescafeinadoPrecio && cafeDescafeinadoGr >= 10 &&  azucarGr >= 5 && aguaMl >= 150 && vasos >= 1)
    // Descontar ingredientes
    {
        cafedescafeinadoGr = cafedecafeinadoGr - 10 && azucarGr = azucarGr - 5 && aguaMl = aguaMl - 150 && vasos = vasos - 1
        console.log("Preparando Cafe descafeinado")
    }

else {
    console.log ("No se puede preparar el cafe descafeinado sorry") ;
    }

    // Calcular vueltas
    let vueltas = saldo - cafeDescafeinadoPrecio;

 // Procesos con estructuras de control

