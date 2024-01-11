function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  return array.every(elemento => elemento === array[0]);
}
//console.log(todosIguales([2, 3, 2, 2]));
//console.log(todosIguales([]));
//console.log(todosIguales([2, 2, 2, 2]));

module.exports = todosIguales;
