//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the 
  //number of times you must multiply the digits in num until you reach a single digit.

function persistence(num, count) {
    
    //code me
    if(typeof count == 'undefined')
        count = 0;
    if(count == 0 && num < 10) return count;
    count++;
  
    let nums = parseInt(num).toString().split('');
    let result = 1;
    nums.forEach(num => result *= parseInt(num));
    
    if(result < 10) 
        return count;
    else {
      //if(count == 0) count = 1;
      return persistence(result, count);
    }
        
   //for(i=0; i<parseInt(num).toString().length; i++) {
        //result = 
       //if(result < 10){    
        //return count;
       //} else {
        //count++;
       //}
    //}
}
