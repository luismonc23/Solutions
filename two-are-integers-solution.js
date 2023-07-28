// Write a function, which takes three integers a, b, and c as arguments, 
// and returns True if exactly two of of the three integers are positive numbers 
// (greater than zero), and False - otherwise.
  
function twoArePositive(a, b, c) {
  let positiveInt = 0;
    if(a > 0)
      positiveInt++;
    if(b > 0)
      positiveInt++;
    if(c > 0)
      positiveInt++;
    
    if(positiveInt == 2) return true;
    else return false;
}
