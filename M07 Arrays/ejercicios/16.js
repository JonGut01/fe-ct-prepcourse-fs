function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  
  const mesesBuscados = array.filter(mes => mes === "Enero" || mes === "Marzo" || mes === "Noviembre");
    if (mesesBuscados.length === 3) {
      return mesesBuscados;
    } else {
      return "No se encontraron los meses pedidos";
    }
}
//console.log(mesesDelAño(["Enero", "Marzo", "abril", "mayo", "Noviembre"]))
module.exports = mesesDelAño;
