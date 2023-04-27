// Convertir el argumento en un arreglo
// recorrer el arreglo, transformando todo a uppercase
// retornar todos los elementos del arreglo fuera del mismo
function realName(...sentence) {
  for (let el of sentence) {
    console.log(el.replace(el[0], el[0].toUpperCase));
    console.log(el.toLowerCase().replace(el[0], el[0].toUpperCase()));
    //.replace(el[0], el.toUpperCase())
  }
}

console.log(realName('Jonner paz', 'mila', 'cArCaj'));
