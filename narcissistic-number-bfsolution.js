// Code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.
// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

//Brute force solution:
function narcissistic(value) {
  let sum = 0;
  let chars = parseInt(value).toString().split('');
  let power = 0;
  
  for(i = 0; i < chars.length;i++){
    power = chars[i] ** chars.length; 
    sum += power;
  }
  
  if(sum == value)
    return true;
  else 
    return false;
}
