function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
    if (!Array.isArray(array) || !array.every(item => typeof item === "number")) {
      return undefined;
     }
    const arrayResultado = array.map((elemento, indice) => elemento * indice);
    return arrayResultado;
}
//console.log(multiplicarElementosPorIndice([1, 2, 3, 4]));

module.exports = multiplicarElementosPorIndice;
