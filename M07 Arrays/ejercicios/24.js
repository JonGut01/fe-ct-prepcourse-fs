function obtenerLargoDelArray(array) {
  // Retornar la longitud del arreglo recibido.
  // Tu código:
  let contador = 0;
  for (let i = 1; i <= array.length; i++) {
    contador++;
  }
  return contador;
}

//console.log(obtenerLargoDelArray([1, 2, 3, 4, 5]));
//console.log(obtenerLargoDelArray(["hola", "mundo"]));

module.exports = obtenerLargoDelArray;
