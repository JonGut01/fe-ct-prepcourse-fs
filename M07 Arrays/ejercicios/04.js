function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  if (array.length === 0) {
    return undefined;
  }
  const ElemAleatorio = Math.floor(Math.random() * array.length);
  return array[ElemAleatorio];
}
//console.log(obtenerElementoAleatorio([10, 5, 6, 121]))
module.exports = obtenerElementoAleatorio;
