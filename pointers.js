function countUniqueValues(sortedArray) {
     //i, j-------------->    
    // 1 1 2 3 3 4 4 5 6 
    let diffValues = [];
    if (sortedArray.length > 1) {
        for (let i = 0; i < sortedArray.length; i++) {
            for (let j = i + 1; j < sortedArray.length; j++) {
                if (sortedArray[i] != sortedArray[j]) {
                    diffValues.push(sortedArray[j]);
                }
            }
        } 
    } 
    else if (sortedArray.length == 1) {
        return 1;
    }
    return diffValues[diffValues.length - 1];
    //console.log(diffValues);
    //return j;
}
console.log(countUniqueValues([-2,-1,-1,1]));