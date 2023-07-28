//             1
//          3     5
//       7     9    11
//   13    15    17    19
//21    23    25    27    29
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
// 1 -->  1
// 2 --> 3 + 5 = 8

//alternative way to elevating n to the power of 3:
  
function rowSumOddNumbers(n) {
	// TODO
  let nthRowStart = 1 + (n*(n-1)); //this represents the sequence of the first element of each row of the pyramid
  let nthRowNumberOfElements = n; //the number of the level of the pyramid contains that same number of elements
  let totalSum = nthRowStart; //The sum starts with the first element in the row, previously calculated
  
  for(i= 1; i<nthRowNumberOfElements; i++){
    nthRowStart+=2;
    totalSum+=nthRowStart;
  }
  return totalSum;
}
