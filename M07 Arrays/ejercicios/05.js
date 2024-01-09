function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con 5 o más caracteres en el array.
  // Tu código:
  
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 5) {
      return array[i];
    }
  }
  return undefined;
}  
//console.log(obtenerPrimerStringLargo(["casa", "monte", "tortuga", "elefante"]));
//console.log(obtenerPrimerStringLargo(["casa", "monte", "torre", "ether"]));

module.exports = obtenerPrimerStringLargo;
