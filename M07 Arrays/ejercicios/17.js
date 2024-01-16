function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  const resultados = [];
  for (let i = 0; i <= 10; i++) {
    const tablaDel6 = 6 * i;
    resultados.push(tablaDel6);
  }
  return resultados;
}
//console.log(tablaDelSeis());
module.exports = tablaDelSeis;
