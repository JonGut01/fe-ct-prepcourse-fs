function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:
  var nvoObjeto = {
    nombre: nombre,
    email: email,
    password: password
  }
return nvoObjeto;
}
// var datos = nuevoUsuario("Jonathan", "JonGut01@github.com", 1234);
// console.log(datos);

module.exports = nuevoUsuario;
