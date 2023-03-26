function collectOddValues(arr) {
    let newArr = [];
    
    if (arr.length === 0) {
        return newArr;
    }
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }
    //here we concatanate all of the arrays at the very end
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}
collectOddValues([1,2,3,4,5]);
//final array [1,3,5]
/*
[1].concat(collectOddValues([2,3,4,5]))
    [].concat(collectOddValues([3,4,5]))
        [3].concat(collectOddValues([4,5]))
            [].concat([5]) -> [5]
*/