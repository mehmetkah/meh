let numberOfVowels = function(str){
    let vowel_list = "aeiouAEIOU";
    let vowels = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowel_list.indexOf(str[i]) !== -1) {
        vowels += 1;
      }
    } return vowels;
  }
  
  
  function numberOfVowels(str) {
    return (str.match(/[aeiouAEIOU]/ig)||[]).length;
  }
  
  console.log(numberOfVowels("orange"));
  console.log(numberOfVowels("lighthouse labs"));
  console.log(numberOfVowels("aeiou"));