function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  const str1SinEspYenMin = str1.replace(/\s/g, "").toLowerCase();
  const str2SinEspYenMin = str2.replace(/\s/g, "").toLowerCase();

  const str1Alverre = str1SinEspYenMin.split("").sort().join("");
  const str2Alverre = str2SinEspYenMin.split("").sort().join("");

  return str1Alverre === str2Alverre;
}

module.exports = esAnagrama;
