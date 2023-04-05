//get digit
function getDigit(num,i) {
    return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10;
}
//tutorial solution get number of digits
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
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
    for (let k=0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length:10}, () => []);
        for (let i =0; i < nums.length; i++) {
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}
radixSort([23,345,5467,12,2345]);
//console.log(radixSort([23,345,5467,12,2345]));
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