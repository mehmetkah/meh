function ageCalculator(name, yearOfBirth, currentYear) {
  let result = "";

  let age = currentYear - yearOfBirth;
  result = name + " is " + age + " years old.";
  return result;
}
console.log(ageCalculator("Suzie", 1983, 2015));
