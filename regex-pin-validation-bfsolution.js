//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

//If the function is passed a valid PIN string, return true, else return false.
  
function validatePIN (pin) {
  if(pin.length == 4)
    return RegExp("(^[0-9]{4}$)").test(pin); //Means it will match in the whole string, a number[0-9] exactly 4 times
  if(pin.length == 6)
    return RegExp("(^[0-9]{6}$)").test(pin); //Means it will match in the whole string, a number[0-9] exactly 6 times
  else return false; //No match or incorrect length
}
