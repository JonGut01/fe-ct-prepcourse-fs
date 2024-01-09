function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  const strSinEspaciosYenMin = string.replace(/\s/g, "").toLowerCase();
  const stringInvertido = strSinEspaciosYenMin.split("").reverse().join("");
  return stringInvertido === strSinEspaciosYenMin;
}

module.exports = esPalindromo;
