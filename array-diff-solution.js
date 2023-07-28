//Implement a difference function, which subtracts one list from another and returns the result.

//It should remove all values from list a, which are present in list b keeping their order.

function arrayDiff(a, b) {
  return a.reduce((result, value) => { //result is my accumulator
    if (!b.includes(value)) { //If b does not have the value (from a) present, add it to result
      result.push(value);
    }
    return result; //return the accumulator, with the a elements not present in b
  }, []); //Initial value is an empty array
}
