//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the 
  //number of times you must multiply the digits in num until you reach a single digit.

function persistence(num, count=0) {
    //code me
    if(count == 0 && num < 10) return count; //The number starts as a single digit number
    count++;
  
    let nums = `${num}`.split(''); // template to stringify a number
    let result = 1;
    nums.forEach(num => result *= parseInt(num)); //sums the numbers
    
    if(result < 10) 
        return count; //reached single digit
    else {
      return persistence(result, count); //try again with the result, and add to the count
    }
}
