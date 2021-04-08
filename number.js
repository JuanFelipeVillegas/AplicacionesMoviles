let number = prompt('Ingrese un número entero');
if (isNaN(number)) {
  console.log('El dato ingresado no es un número entero');
  valInt = false;
} else if (number<10){
  console.log('Debes ingresar un número entero para continuar')
}
else {
function reversedNumber(number)
{ 
  let reversed = 0
  let number1 = number
  do {
      reversed = reversed * 10 + (number1 % 10)
      number1 = Math.floor(number1 / 10)
  } while ( number1 > 0 )
  return reversed

}}     console.log(reversedNumber(number));

