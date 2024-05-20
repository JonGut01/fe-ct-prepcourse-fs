function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
let totalLikes = 0;
for (let i = 0; i < objetoUsuario.posts.length; i++) {
  const post = objetoUsuario.posts[i];
  totalLikes += post.likes;
}
return totalLikes;
}

// const usuario1 = {
//   nombre: "Jonathan",
//   posts: [
//     {id: 1, contenido: "Hola Mundo!", likes: 10},
//     {id: 2, contenido: "Hola fin de semana", likes: 15},
//     {id: 3, contenido: "Buen día", likes: 20}
//   ]
// };

// console.log(sumarLikesDeUsuario(usuario1));

module.exports = sumarLikesDeUsuario;
