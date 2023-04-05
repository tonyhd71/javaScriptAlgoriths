//get digit
function getDigit(num,i) {
    return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10;
}
//tutorial solution get number of digits
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
/*tutorial solution

function mostDigits(arr) {
    let biggest = digitCount(arr[0]);
    for (let i =0; i < arr.length - 1; i++) {
        if (digitCount(arr[i+1]) > digitCount(arr[i])) {
            biggest = digitCount(arr[i+1]);
        }
    }
    return biggest;
}
*/
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i =0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function digitCount(num) {
    num = num.toString();
    numDigits = num.length;
    return numDigits;
}
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    console.log(maxDigits))
}
console.log(mostDigits([23,567,89,12234324]));