const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:
  
  const propiedades = propiedad.split(/\.|\["|"\]/).filter(Boolean);

  return propiedades.reduce((acc, current) => {
    if (acc && acc[current] !== undefined) {
      return acc[current];
    } else {
      return undefined;
    }
  }, objeto);
};

// const objeto = {
//   nombre: "Juan",
//   edad: 30,
//   direccion: {
//     calle: "Calle Falsa",
//     numero: 123,
//     ciudad: "Springfield",
//   },
// };
// const valorNombre = obtenerValorPropiedad(objeto, 'direccion["numero"]');
// console.log(valorNombre);

module.exports = obtenerValorPropiedad;
