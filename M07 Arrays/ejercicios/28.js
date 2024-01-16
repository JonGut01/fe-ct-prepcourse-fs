function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
  if (!Array.isArray(arr) || arr.length === 0) {
    return false;
  }
  return true;
}

//console.log(esArrayNoVacio([1, 2, 3, 4, 5]));
//console.log(esArrayNoVacio([]));
//console.log(esArrayNoVacio("Hola Jonathan"));

module.exports = esArrayNoVacio;