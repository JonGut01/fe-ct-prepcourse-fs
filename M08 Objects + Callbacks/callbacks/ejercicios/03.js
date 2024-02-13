function operacionMatematica(num1, num2, cb) {
  // En este ejercicio recibirás dos números y un callback.
  // El callback realiza una operación matemática, por lo que necesita de los dos números.
  // Retorna el resultado del callback pasándole por valores los números num1 y num2.
  // Tu código:

  if (typeof cb === "function") {
    return cb(num1, num2);
  } else {
    return null;
  }
}
  function suma(a, b) {
    return a + b;
  }
  function resta(a, b) {
    return a - b;
  }
  function multiplicacion(a, b) {
    return a * b;
  }
  function division(a, b) {
    return a / b;
  }

// console.log(operacionMatematica(5, 3, suma));
// console.log(operacionMatematica(1, 3, resta));
// console.log(operacionMatematica(2, 3, multiplicacion));
// console.log(operacionMatematica(12, 3, division));

module.exports = operacionMatematica;
