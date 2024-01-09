function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if (!Array.isArray(array) || !array.every(item => typeof item === "number")) {
    return "Error, revise si todos los datos ingresados son números";
  }
  if (array.length === 0) {
    return 0;
  }
  let indiceArrayMayor = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[indiceArrayMayor]) {
      indiceArrayMayor = i;
    }
  }
return indiceArrayMayor;
}
//console.log(encontrarIndiceMayor([121, 1, 14, 18, 21, 2]));
//console.log(encontrarIndiceMayor([-121, -1, -14, -18, -21, -2]));

module.exports = encontrarIndiceMayor;
