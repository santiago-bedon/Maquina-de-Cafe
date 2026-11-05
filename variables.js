const tinto = "Tinto";
const cafeConLeche = "Cafe con leche";
const te = "Te";
const mocaccino = "Mocaccino";
const cafeDescafeinado = "Cafe descafeinado";

// Tinto
const cafeTinto = 10;
const aguaTinto = 150;
const azucarTinto = 5;
let tintoPrecio = 2000;

// Cafe con leche
const cafeCcl = 10;
const lecheCcl = 100;
const azucarCcl = 5;
let cafeConLechePrecio = 3000;

// Te
const teTe = 10;
const aguaTe = 200;
const azucarTe = 5;
let tePrecio = 2000;

// Mocaccino
const cafeMoca = 10;
const chocolateMoca = 15;
const lecheMoca = 100;
const aguaMoca = 50;
let mocaccinoPrecio = 4000;

// Cafe descafeinado
const cafeDescafeinadoCdesca = 10;
const aguaCdesca = 150;
const azucarCdesca = 5;
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
        console.log("Preparando tinto")
    }

else {
    console.log( "No se puede preparar el tinto sorry");
    }

        break;

    case 2:
    
    // Proceso Cafe con leche

    alert("Cafe con leche")

if (saldo >= cafeConLechePrecio && cafeGr >= 10 && azucarGr >= 5 && aguaMl >= 150 && vasos >= 1)
    // Descontar ingredientes
    {
        cafeGr = cafeGr - 10;
         azucarGr = azucarGr - 5;
          lecheMl = lecheMl - 150;
           vasos = vasos - 1
        console.log("Preparando Cafe con leche")
    }

else{ 
    console.log( "No se puede preparar el cafe con leche sorry");
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
        console.log("Preparando Te")
    }

else {
    console.log( "No se puede preparar el te sorry");
    }

    break;

    case 4:

        // Proceso Moccacino

        alert("Mocaccino")

if (saldo >= mocaccinoPrecio && cafeGr >= 10 && chocolateGr >= 15 && aguaMl >= 50 && lecheMl >= 100 && vasos >= 1)
    // Descontar ingredientes
    {
        cafeGr = cafeGr - 10;
         azucarGr = azucarGr - 5;
          aguaMl = aguaMl - 50;
           lecheMl = lecheMl - 100; vasos = vasos - 1
        console.log("Preparando Mocaccino")
    }

else {
    console.log ("No se puede preparar el mocaccino sorry");
    }

    break;

    case 5:

        // Proceso Cafe Descafeinado

        alert("Cafe descafeinado")

if (saldo >= cafeDescafeinadoPrecio && cafeDescafeinadoGr >= 10 &&  azucarGr >= 5 && aguaMl >= 150 && vasos >= 1)
    // Descontar ingredientes
    {
        cafedescafeinadoGr = cafedecafeinadoGr - 10;
         azucarGr = azucarGr - 5;
          aguaMl = aguaMl - 150;
           vasos = vasos - 1
        console.log("Preparando Cafe descafeinado")
    }

else {
    console.log ("No se puede preparar el cafe descafeinado sorry") ;
    }

    break;

    default:

        alert ("Ese producto no esta en el menu")
        break;
 }

    // Calcular vueltas 

    // let vueltas = if (saldo > tintoPrecio) {
      //  saldo - tintoPrecio 
     
