function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  const resultado = [];
  let interacciones = 0;

  while (interacciones < 10) {
    num += 2;
    resultado.push(num);
    if (interacciones === num) {
      return "Se interrumpió la ejecución";
    }
    interacciones ++;
  }
 return resultado;
}

//console.log(breakStatement(3));
//console.log(breakStatement(-4));

module.exports = breakStatement;
