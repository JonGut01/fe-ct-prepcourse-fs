function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  
  if (!Array.from(arguments).every(item => typeof item === "number")) {
    return "Uno o más datos ingresados no son números"
  }
  if (arguments.length === 0) {
    return 0;
  }
  const argumentArray = Array.from(arguments);
  const productoArgumentos = argumentArray.reduce((producto, Element) => producto * Element);
  return productoArgumentos;
}
//console.log(multiplicarArgumentos(2, 2, 2, 2));
module.exports = multiplicarArgumentos;
