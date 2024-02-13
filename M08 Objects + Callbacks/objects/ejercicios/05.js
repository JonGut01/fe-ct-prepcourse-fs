const listarPropiedades = (objeto) => {
  // Lista y retorna todas las propiedades que posee el objeto recibido por la función.
  // PISTA: Puedes usar el método Object.keys().
  // Tu código:
  const propObj = Object.keys(objeto);
  return propObj;
};

const datosPersonales = {
    nombre: "Jonathan",
    direccion: {
      calle: "Cambre",
      numero: 123,
      ciudad: "Los Reartes",
    },
    hobbies: ["programación", "trading"], 
  };

  const otrosDatos = {};

console.log(listarPropiedades(datosPersonales));
console.log(listarPropiedades(otrosDatos));

module.exports = listarPropiedades;
