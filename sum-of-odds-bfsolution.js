//             1
//          3     5
//       7     9    11
//   13    15    17    19
//21    23    25    27    29
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
// 1 -->  1
// 2 --> 3 + 5 = 8
  
function rowSumOddNumbers(n) {
	// TODO
  let nthRowStart = 1 + (n*(n-1));
  let nthRowNumberOfElements = n;
  let totalSum = nthRowStart;
  
  for(i= 1; i<nthRowNumberOfElements; i++){
    nthRowStart+=2;
    totalSum+=nthRowStart;
  }
  return totalSum;
}
