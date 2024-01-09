function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  if (!Array.isArray(array) || !array.every(item => typeof item === "number")) {
    return "Uno o más datos ingresados no son números.";
  }
  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      contador ++;
    }
  }
  return contador;
}
//console.log(contarElementosMayoresA10([2, 10, 11, 98, 1, 15]));
//console.log(contarElementosMayoresA10([2, 10, 11, false, 1, 15]));

module.exports = contarElementosMayoresA10;
