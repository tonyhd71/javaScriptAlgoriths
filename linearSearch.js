function isValueHere(arr,num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) return i;
    }
    return -1;
}
console.log(isValueHere([3,7,12,4,9], 1));