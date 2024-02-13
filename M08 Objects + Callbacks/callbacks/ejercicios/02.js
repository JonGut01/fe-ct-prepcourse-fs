function cambiarCadena(string, callback) {
  // Aplica la función de callback al string y devuelve el resultado.
  // La función de callback se encargará de recibir el string y devolverlo con los cambios.
  // Tu código:

  if (typeof callback === "function") {
    return callback(string);
  } else {
    return string;
  }
 }
  function modificarStr(str) {
    return str.toUpperCase();
  }
  
  // var resultado1 = cambiarCadena("hola mundo", modificarStr);
  // var resultado2 = cambiarCadena("hola mundo");
  // var resultado3 = cambiarCadena("", modificarStr);
  // console.log(resultado3);
  // console.log(resultado2);
  // console.log(resultado1);

module.exports = cambiarCadena;
