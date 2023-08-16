//Write a function that accepts an array of 10 integers (between 0 and 9), 
//that returns a string of those numbers in the form of a phone number.
//returns "(123) 456-7890"

function createPhoneNumber(numbers){
  let a = numbers.map(String);
  return `(${a[0]+a[1]+a[2]}) ${a[3]+a[4]+a[5]}-${a[6]+a[7]+a[8]+a[9]}`; //Template literals
}
