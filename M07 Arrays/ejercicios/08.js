function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  if (!Array.isArray(array) || !array.every(item => typeof item === "number")) {
    return "un dato ingresado no es número";
  }
  const arrayPar = array.filter(Element => Element % 2 === 0);
  return arrayPar;
}
//console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6]));
module.exports = filtrarNumerosPares;
