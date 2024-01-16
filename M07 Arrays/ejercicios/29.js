function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:

  if (!Array.isArray(numeros) || !numeros.every(item => typeof item === "number" && Number.isInteger(item))) {
      return "Uno o más datos ingresados no son números enteros";
  }
  if (numeros.length === 0) {
    return null;
  }
  numeros.sort((a, b) => a - b);
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] !== i + 1) { 
    return i + 1;
    }
  }
  return null; 
}

//console.log(encontrarNumeroFaltante([1, 2, 3, 4, 5, 6, 7, 8, 10]));
//console.log(encontrarNumeroFaltante([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//console.log(encontrarNumeroFaltante([]));
//console.log(encontrarNumeroFaltante([1, 2, 3, 4, "cinco", 6, 7, 8, 9, 10]));
//console.log(encontrarNumeroFaltante([1, 8, 3, 4, 6, 7, 2, 9, 10]));

module.exports = encontrarNumeroFaltante;