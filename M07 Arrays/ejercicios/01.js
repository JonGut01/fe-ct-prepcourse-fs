function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
 const arrayInvertido = [];
  for (let i = array.length -1; i >= 0; i--) {
    arrayInvertido.push(array[i]);
  }
 return arrayInvertido;
}
//console.log(invertirArray([1, 2, 3, 4]));
//console.log(invertirArray(["Hola", 2, null, true]));
//console.log(invertirArray([undefined, "tres", [], 4]));
module.exports = invertirArray;
