// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Lucas";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 6;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  var string = str;
  return string;
}

function suma(x, y) {
  var sumar = x + y;
  return sumar;
}

function resta(x, y) {
  var resta = x - y;
  return resta;
}

function multiplica(x, y) {
  var multi = x * y;
  return multi;
}

function divide(x, y) {
  var div = x / y;
  return div;
}

function sonIguales(x, y) {
  if (x === y) {
    return true;
  }
  else {
    return false;
  }
}

function tienenMismaLongitud(str1, str2) {
  if (str1.length === str2.length) {
    return true;
    } else {
      return false;
    }
}

function menosQueNoventa(num) {
  if (num < 90) {
    return true;
  } else {
    return false;
  }
}

function mayorQueCincuenta(num) {
  if (num > 50) {
    return true;
  } else {
    return false;
  }
}

function obtenerResto(x, y) {
  var resto = x % y;
  return resto;
}

function esPar(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function esImpar(num) {
 if (num % 2 === 1) {
   return true;
 } else {
   return false;
 }
}

function elevarAlCuadrado(num) {
  var elev = Math.pow(num, 2);
  return elev;
}

function elevarAlCubo(num) {
  var elev = Math.pow(num, 3);
  return elev;
}

function elevar(num, exponent) {
  var elev = Math.pow(num, exponent);
  return elev;
}

function redondearNumero(num) {
  var redondeo = Math.round(num);
  return redondeo;  
}

function redondearHaciaArriba(num) {
  var redondeo = Math.ceil(num);
  return redondeo;
}

function numeroRandom() {
  return Math.random();
}

function esPositivo(numero) {
  if (numero > 0) {
    return "Es positivo";
  } else if (numero < 0) {
    return "Es negativo"
  } else (numero == 0); {
    return false; }
  }

function agregarSimboloExclamacion(str) {
  var exclamacion = str + "!";
  return exclamacion;
}

function combinarNombres(nombre, apellido) {
  var complete = nombre + " " + apellido;
  return complete;
}

function obtenerSaludo(nombre) {
  var salute = "Hola " + nombre + "!";
  return salute;
}

function obtenerAreaRectangulo(alto, ancho) {
  var areaRectangulo = ancho * alto;
  return areaRectangulo;
}


function retornarPerimetro(lado){
  var perimetro = lado + lado + lado + lado;
  return perimetro;
}


function areaDelTriangulo(base, altura){
  var area = (base * altura) / 2;
  return area;
}


function deEuroAdolar(euro){
  var conversor = euro * 1.20;
  return conversor;
}


function esVocal(letra){
   if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
     return "Es vocal";
   } else {
    return "Dato incorrecto";
   }
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
}
