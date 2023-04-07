//POWER OF SOLUTION
/*
function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent -1);
}
//FACTORIAL SOLUTION
function factorial(x) {
	if (x < 0) return 0;
	if (x <= 1) return 1;
    return x * factorial(x-1);
}
*/
//my solution below
function recursiveRange(num) {
    let answer = 0;
    function helper(input) {
        for (let i =0; i <=input; i++) {
            answer += i;
        }
    }
    helper(num);
    return answer;
}
//solution utilizing recursion 
function recursiveRangee(x) {
    if (x ===0) return 0;
    return x + recursiveRange(x -1);
}
//PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

