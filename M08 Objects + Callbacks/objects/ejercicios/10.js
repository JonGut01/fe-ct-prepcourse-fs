function agregarPropiedad(objeto, propiedad) {
  // Recibirás un objeto por parámetro.
  // Debes agregarle una propiedad con el nombre recibido por parámetro.
  // Esta propiedad será igual al valor `null`.
  // Retornar el objeto.
  // Tu código:
  
  objeto[propiedad] = null 
    return objeto;
}
// objeto = {}
//  nvoObjeto = agregarPropiedad(objeto, "color");
// console.log(nvoObjeto);

module.exports = agregarPropiedad;
