function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  if (!Array.isArray(arrayOfNums) || !arrayOfNums.every(item => typeof item === "number")) {
    return "Uno o más datos ingresados no son números";
  }
  const sumaTotal = arrayOfNums.reduce((acumulador, Element) => acumulador + Element, 0);
  return sumaTotal;
}
//console.log(agregarNumeros([2, 4, 6, 8]))
module.exports = agregarNumeros;
