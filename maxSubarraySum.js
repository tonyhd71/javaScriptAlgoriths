function maxSubArraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }
    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i ++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
        console.log(temp,max);
    }
    return max;
}
console.log(maxSubArraySum([2,6,9,1,8,5,6],3),3); //10

/*---------------------------------------------------TIME COMPLEXITY O(N)--------------------------------------------------------------*/
[1,2,3,1,2,3,2,3,4,5,3,2,3,4,5,6,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,]/*
 -                   -
   -                   - we dont re-add everything, just subtract first and add last (of new numbers) */
/*---------------------------------------------------REFACTORED BELOW-----------------------------------------------------------------*/
function maxSubArraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i ++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum;
}
//maxSubArraySum([1,6,9,2,1,8,5,6,3],3);
function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.
    
  }
  
