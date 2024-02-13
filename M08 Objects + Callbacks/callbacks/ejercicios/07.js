function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:

  if (!Array.isArray(arrayOfStrings) || !arrayOfStrings.every(item => typeof item === "string")) {
    return "Uno o más datos ingresados no son un string";
  }
  const NvoArreglo = [];
  for (let i = 0; i < arrayOfStrings.length; i++) {
    if (arrayOfStrings[i].startsWith("A") || arrayOfStrings[i].startsWith("a")) {
      NvoArreglo.push(arrayOfStrings[i]);
    }
  }
  return NvoArreglo;
}

//console.log(filter(["ancla", "bastón", "avión", "moto", "sandía", "alas"]));

module.exports = filter;
