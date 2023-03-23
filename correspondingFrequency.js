//[1,2,3,444,7,7,12,12,13]
// i j

function countUniqueValues(numAll) {
    if (!Array.isArray(numAll)) {
        return 'Input must be an array';
    }
    let numUniquelength = numAll.length - 1;
    let lowestNum = numAll[0];
    let nextDiffNum;
    let j;
    for (let i = 0; i < numUniquelength; i++) {
        j = i + 1;
       let diffNum = numAll[j];
        if (numAll[i] < diffNum) {
            numAll.splice(numAll.indexOf(numAll[i]), 0, diffNum);
            j++;
        }
        //console.log(numAll);
        //console.log(`value of i is ${numAll[i]}, value of j is ${numAll[j]}`);
        /*
        for (let j = 1; j ; j++) {
                //[1,1,1,1,2,2]
                           first numAll[i] that is different from j
                           this happens first at numAll[5];
                            swap value at numAll[5], which is 4, 
                            with next sorted number that comes after
                            */     
    }
    return numAll;
};
//console.log(countUniqueValues([1]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
/*
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2,-1,-1,0,1]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
*/