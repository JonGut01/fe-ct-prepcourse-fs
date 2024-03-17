// Crea un objeto con propiedades anidadas y 
//un método que acceda a una de las propiedades anidadas utilizando `this`.

var persona = {
    nombre: "Jonathan",
    edad: 36,
    direccion: {
        calle: "cambre",
        cuidad: "Los Reartes",
        provincia: "Córdoba",
        pais: "Argentina"
    },
    obtenerCiudad: function() {
    return this.direccion.cuidad; 
    }
};

console.log(persona.obtenerCiudad());

module.exports = objetoAnidado;
