const lastIndexOf = function (array, item) {
  let indexesOfItem = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      indexesOfItem.push(i);
      console.log(i);
    }
  }
  if (indexesOfItem.length === 0) {
    return -1;
  }
  return indexesOfItem[indexesOfItem.length - 1];
};
