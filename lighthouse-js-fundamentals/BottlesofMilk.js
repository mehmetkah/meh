let num = 200;
while (num >= 1) {
  if (num === 1) {
    console.log("this is the last bottle of milk!.");
  } else if (num === 2) {
    console.log(
      num - 1 + " bottle left" + " Hurry the is almost out of stock!"
    );
  } else {
    console.log("Drink milk for strong bones!." + (num - 1) + " bottles left!");
  }
  num = num - 1;
}
