const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let contador = 0;
  for (let propiedades in objeto) {
    contador++;
  }
  return contador;
};

// const datosPersonales = {
//   nombre: "Jonathan",
//   apellido: "Gutierrez",
//   edad: 35,
//   contacto: {
//     tel: 3546549615,
//     email: null,
//     github: "johngut01",
//   },
// };

// console.log(contarPropiedades(datosPersonales));

module.exports = contarPropiedades;
