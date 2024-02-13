function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:
  if (Array.isArray(arrayOfNumbers) && typeof cb === "function") {
    const sumaTotal = arrayOfNumbers.reduce((suma, numeros) => suma + numeros, 0);
    cb(sumaTotal);
  }
}
  
module.exports = sumarArray;
