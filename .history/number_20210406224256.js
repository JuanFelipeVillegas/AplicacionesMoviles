let number = prompt("Ingrese un número entero");
function invertNumber(number)
{ 
  let invert = 0
  let rest = number
  do {
    if (isNaN(number)) {
        console.log('El dato ingresado no es un número entero');
        valInt = false;
      }
    invert = invert * 10 + (rest % 10)
    rest = Math.floor(rest / 10)
  } while ( rest > 0 )
  return invert
}
console.log(invertNumber(number));
//si el resultado es NaN es porque no se ingresó un número entero.