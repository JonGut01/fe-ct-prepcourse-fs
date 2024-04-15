function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:

    if (objetoUsuario.hasOwnProperty("amigos")) {
      objetoUsuario.amigos.push(nuevoAmigo);
    }
    return objetoUsuario;
}
const persona = {
  nombre: "Jonathan",
  edad: 35,
  email: "jonGut01@vsc.com",
  password: 1234,
  amigos: ["Jose", "Juan"]
};
console.log(agregarAmigo(persona, "Jaime"));

module.exports = agregarAmigo;
