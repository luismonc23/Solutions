// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.
function solution(number){
  let str = number.toString();
  let finalString = "";
  // convert the number to a roman numeral
  if(number % 1000 < 1000)
    finalString += 'M';
    
}
