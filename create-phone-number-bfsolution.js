//Write a function that accepts an array of 10 integers (between 0 and 9), 
//that returns a string of those numbers in the form of a phone number.
//returns "(123) 456-7890"

function createPhoneNumber(numbers){
    let finalPhone = "(";
  for(i = 0; i<numbers.length; i++){
      let num = numbers[i];
    if(i<3){ 
        finalPhone += num.toString(); //First three numbers: 123
      }
      else if(i == 3){
          finalPhone += ") "+num.toString();//Fourth number: ) 4
      } else if(i>3 && i<6){
          finalPhone += num.toString(); //Next two numbers: 56
      } else if(i == 6){
          finalPhone += "-"+num.toString();//Seventh number: -7
      } else {
          finalPhone += num.toString(); //Last numbers 890
      }
  }
    return finalPhone;
}
