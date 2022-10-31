// No cambies los nombres de las funciones.

const gitRemoteOriginUrl = require("git-remote-origin-url");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[(array.length)-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (var i = 0; i <= (array.length -1); i++) {
    array[i] ++;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var cadena = "";
  for (var i = 0; i <= (palabras.length -1); i++) {
    cadena += palabras[i];
    if (i !== (palabras.length -1)) {
      cadena += " ";
    }
  }
  return cadena;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var valor = 0;
  for (var i = 0; i <= (numeros.length -1); i++) {
    valor += numeros[i];
  }
  return valor;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promedio = 0;
  for (var i = 0; i <= (resultadosTest.length -1); i++) {
    promedio += resultadosTest[i];
  }
  promedio /= resultadosTest.length;
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  //Solucion 1
  // numeros.sort(function(a,b){return b-a;});  //Primero pensé en esta solución antes de iterar el array y hacer comparaciones
  // return numeros[0];                         //Luego buscando, encontré que la función Math tiene una herramienta para ello
  //Solucion 2                                  //y consideré que debe ser más eficiente que reordenar un array.
  //return Math.max.apply(numeros);
  //Solucion 3
  return Math.max(...numeros);      //Además intenté usar el spread (...) para desplegar los valores del array, y funciona bien
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length === 1) {
    return arguments[0];
  } else if (arguments.length > 1) {
    var producto = 1;
    for (var i = 0; i < (arguments.length); i++){
      producto *= arguments[i];
    }
    return producto;
  }
  return 0; // Si argumentos no es 1 ni mayor que 1, las anteriores condiciones son falsas, asumimos que será 0, porque no se pueden
            // pasar argumentos negativos (no habrá menos de 0 argumentos)
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  //Solución 1:
  // var mayoresDieciocho = 0;
  // for (var i = 0; i < arreglo.length; i++) {
  //   if (arreglo[i] > 18) {
  //     mayoresDieciocho ++;
  //   }
  // }
  // return mayoresDieciocho;

  //Solucion 2: pienso que potencialmente sería más eficiente, dado que al encontrar el primer nro mayor a 18, el bucle terminará.
  arreglo.sort(function(a,b){return a-b;}); //Ordeno la lista de elementos en forma ascendente, los nros más bajos seran los primeros
  var iteracion = 0;                        //Número de vuelta del bucle, lo usaré como contador
  var limite = arreglo.length;              //Nro máximo de iteraciones, para condición de frenado
  while (iteracion < limite) {              //Se va quitando el primer elemento del array ordenado, si es menor o igual a 18.
    if (arreglo[0] > 18) {                  //Si el primer elemento de la lista es mayor a 18, o si se alcanzó el nro máximo
      break;                                //de iteraciones, termina el While.
    }
    arreglo.shift();  //Si la condicion no se cumplió (es decir, el elemento no era mayor a 18) eliminamos el elemento del array
    iteracion++;      //Sumamos 1 para control de las iteraciones
  }
  return arreglo.length; //Al haber quitado del array todos los elementos menores o iguales a 18, solo quedan los mayores dentro.
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  //Solución 1
  switch (numeroDeDia) {
    case 1:               //Conocido como "Fall through", cuando se agrupan casos para los que la respuesta es la misma.
    case 7:               //sin colocar un break (o return si es una función) en cada uno
      return "Es fin de semana";
  
    default:
      return "Es dia Laboral";
  }

  //Solucion 2:
  // if (numeroDeDia === 1 || numeroDeDia === 7) { //Con if y el operador OR
  //   return "Es fin de semana";
  // }
  // else {
  //   return "Es dia Laboral";
  // }

  //Solucion 3:
  // if ((1,7).includes(numeroDeDia)) {            //Usando un Array y el método .includes
  //   return "Es fin de semana";
  // }
  // return "Es dia Laboral";
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  return n.toString()[0] == "9";
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (var i = 1; i < arreglo.length; i++) { //Coloco i = 1 dado que no necesito comparar el 1er elemento consigo mismo
    if (arreglo[0] !== arreglo[i]) {
      return false;                          //Si alguno de los elementos es distinto, se detiene el bucle devolviendo false
    }
  }
  return true; //Si el código llega hasta acá, quiere decir que todos los elementos eran iguales
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = [];
  for (var i = 0; i < array.length; i++) {
    if (["Enero","Marzo","Noviembre"].includes(array[i])) {
      nuevoArray.push(array[i]);
    }
  }
  if (nuevoArray.length === 3) {
    return nuevoArray;
  }
  return "No se encontraron los meses pedidos";
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var otroArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      otroArray.push(array[i]);
    }
  }
  return otroArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var respuesta = [];
  for (var i = 0; i < 10; i++) {                  //Limite de ejecuciones 10 (0 a 9)
    numero += 2;                                  //Voy sumando de a 2 el valor de numero
    respuesta.push(numero);                       //Guardo el valor de numero en el array
    if (numero === i) {                           //Si el valor actual de numero es igual al de i:
      respuesta = "Se interrumpió la ejecución";  //Sobreescribo la variable para poder responder apropiadamente
      break;                                      //y suspendo el bucle
    }
  }
  return respuesta;                               //Devuelvo 'respuesta', sea que contenga el array, o la cadena.
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var respuesta = [];
  for (var i = 0; i < 10; i++) {                  //Limite de ejecuciones 10
    if (i === 5) {                                //Si la iteración es la nro 5:
      continue;                                   //Continuamos, saltando la adición de 2 unidades a numero.
    }
    numero += 2;                                  //Voy sumando de a 2 el valor de numero
    respuesta.push(numero);                       //Guardo el valor de numero en el array
  }
  return respuesta;                               //Devuelvo respuesta
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
