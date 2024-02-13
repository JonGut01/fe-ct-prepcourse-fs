const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:

  const nuevoObjeto = {...objeto};
  if (typeof valor === "boolean") {
    nuevoObjeto[propiedad] = valor;
  } else {
    nuevoObjeto[propiedad] = valor;
  }
  return nuevoObjeto;
};

// const datosPersonales = {
//     nombre: "Jonathan",
//     edad: 35,
//   };

// const nacionalidad = agregarNuevaPropiedad(datosPersonales, "nacionalidad", "argentino");
// const estadoCivil = agregarNuevaPropiedad(datosPersonales, "soltero", true);
// const hobbie = agregarNuevaPropiedad(datosPersonales, "hobbie", null);

// console.log(nacionalidad);
// console.log(estadoCivil);
// console.log(hobbie);

module.exports = agregarNuevaPropiedad;
