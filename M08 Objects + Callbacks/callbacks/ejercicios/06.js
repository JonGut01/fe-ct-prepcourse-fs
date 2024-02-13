function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  
  if (Array.isArray(array) && typeof cb === "function") {
  const nvoArray = [];

    for (let i = 0; i < array.length; i++) {
      nvoArray.push(cb(array[i]));
    }
    return nvoArray;
 }
}

module.exports = map;
