// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.
function solution(number){
  if(number < 1 && number > 3999)
     return;
  
  let str = number.toString();
  let finalString = "";
  let m = "";
  let c = "";
  let d = "";
  let u = "";
  // convert the number to a roman numeral
  if(number > 999){
    m = Math.floor(number / 1000); //get the thousands
    number -= m * 1000;
  }
  else m = "";
  if(number > 99){
    c = Math.floor(number / 100); //get the hundreds
    number -= c * 100;
  }
  else c = "";
  if(number > 9){
    d = Math.floor(number / 10); //get the tens
    number -= d * 10;
  }
  else d = "";
  if(number < 10)
    u = number;  //get the units

  let numArray = [m,c,d,u];
  finalString = "M".repeat(m) + 
    (c < 4 ? "C".repeat(c) : c == 4 ? "CD" : c == 9 ? "CM" : "D" + "C".repeat(c-5)) + 
    (d < 4 ? "X".repeat(d) : d == 4 ? "XL" : d == 9 ? "XC" : "L" + "X".repeat(d-5)) + 
    (u < 4 ? "I".repeat(u) : u == 4 ? "IV" : u == 9 ? "IX" : "V" + "I".repeat(u-5));
  //M repeats max 3 times because number must be less than 3999
  //C repeats up to three times, or is a special case (4,9), or is greater than 5, same with tens (X) and units (I) 
  return finalString;
}
