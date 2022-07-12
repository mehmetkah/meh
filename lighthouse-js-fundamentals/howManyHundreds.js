function howManyHundreds(hundreds) {
    
  let result = 0;
  result = hundreds % 10;

  return result;
}
console.log(howManyHundreds(1000));
