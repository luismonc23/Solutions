var maxSequence = function(arr){

  if(arr.length == 0) return 0;

  let sum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if(sum < 0)
          sum = element;
      else
          sum += element;

      if(sum < 0){ sum = arr[i+1]; i++;}
      if(sum > maxSum) maxSum = sum;
  }

  return maxSum;
}
