function invertNumber(number)
{ 
  let invert = 0
  let rest = number
  do {
    invert = invert * 10 + (rest % 10)
    rest = Math.floor(rest / 10)
  } while ( rest > 0 )
  return invertido
}
console.log(invertNumber(54321))