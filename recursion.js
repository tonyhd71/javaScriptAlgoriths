
/*
function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num-1);
}
console.log(sumRange(3));

sumRange(3);
return 3 + sumRange(2) 
                return 2 + sumRange(1)
                                return 1

function factorial(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}
*/
function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}
console.log(factorial(2));