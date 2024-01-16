function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  const resultado = [];
  let iteraciones = 0;

  while (iteraciones < 10) {
    num += 2;    
    if (iteraciones === 4) {
      iteraciones ++;
      continue;
    }
    resultado.push(num);
    iteraciones ++;
  }
  return resultado;
}
//console.log(continueStatement(50));
//console.log(continueStatement(-4));

module.exports = continueStatement;
