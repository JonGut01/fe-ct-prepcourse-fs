function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
if (!Array.isArray(array) || !array.every(item => typeof item === "string")) {
  return undefined;
}
  const arrayEnMayuscula = array.map(Element => Element.toUpperCase());
  return arrayEnMayuscula;
}
//console.log(convertirStringAMayusculas(["hola", "mundo!", "javascript"]));
module.exports = convertirStringAMayusculas;
