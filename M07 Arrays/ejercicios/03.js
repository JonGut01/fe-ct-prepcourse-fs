function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
 const buscarElemento = array.indexOf(elemento);
 return buscarElemento;
}
//console.log(encontrarElemento(2, [1, 5, 3, 6, 2, 4]));
//console.log(encontrarElemento("hola", ["cancion", 5, null, "hola", undefined, 4]));
//console.log(encontrarElemento(2, []));
module.exports = encontrarElemento;
