const conditionalSum = (values, conditions) => {
    function isEven(number) { 
      if (number % 2 === 0) {
        return 'even';
      } else {
        return 'odd';
      }
    }
  
    function sumOfArray(array) { 
      let sum = 0;
      for (index = 0; index < array.length; index ++) {
        sum += array[index];
      }
      return sum;
    }  
  
    let conditionalArray = [];
    for (i = 0; i < values.length; i ++) {
      if (isEven(values[i]) === conditions) {
        conditionalArray.push(values[i]);
      } 
    }
  
    return sumOfArray(conditionalArray);
  }