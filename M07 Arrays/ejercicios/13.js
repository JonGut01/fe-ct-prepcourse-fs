function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  if (!Array.isArray(resultadosTest) || !resultadosTest.every(item => typeof item === "number")) {
    return undefined;
  }
  const sumaTotal = resultadosTest.reduce((acumulador, Element) => acumulador + Element, 0);
  const Promedio = sumaTotal / resultadosTest.length;
  return Promedio;
}
//console.log(promedioResultadosTest([10, 9, 10, 9]));
module.exports = promedioResultadosTest;
