function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

    const elementosVistos = {};
  
    for (let i = 0; i < numeros.length; i++) {
      const elementoActual = numeros[i];
  
      // Verificar si el elemento ya ha sido visto
      if (elementosVistos[elementoActual] !== undefined) {
        return elementoActual; // Se encontró un elemento repetido
      }
  
      // Registrar el elemento en el objeto para futuras referencias
      elementosVistos[elementoActual] = i;
    }
  
    // Si no se encuentra ningún elemento repetido, retornar null
    return undefined;
  }
  
//console.log(encontrarElementoRepetido([1, 2, 3, 4, 3, 5]));

module.exports = encontrarElementoRepetido;