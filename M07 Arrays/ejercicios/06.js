function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  
 if (!Array.isArray(array) || !array.every(item => typeof item === "number")) {
  return undefined;
 }
 const arrayDuplicado = array.map(Element => Element * 2);
 return arrayDuplicado;
}
//console.log(duplicarElementos([1, 2, 3, 4]));
//console.log(duplicarElementos([]));

module.exports = duplicarElementos;
