// Write a function, which takes three integers a, b, and c as arguments, 
// and returns True if exactly two of of the three integers are positive numbers 
// (greater than zero), and False - otherwise.
  
function twoArePositive(a, b, c) {
  let positiveInt = 0;  
  positiveInt += (a > 0) + (b > 0) + (c > 0) //if evaluates to true, is also a 1, false is a 0
  if(positiveInt == 2) return true;
  else return false;
}
