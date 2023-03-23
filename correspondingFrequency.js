//[1,2,3,444,7,7,12,12,13]
// i j

function countUniqueValues(numAll) {
    let numUniquelength = numAll.length - 1;
    let lowestNum = numAll[0];
    let largestNum = numAll[numUniquelength];
    let j;
    for (let i = 0; i < numUniquelength; i++) {
        j = numAll[i + 1];
        if (numAll[i] < j) {   
           // numAll.splice(numAll[j], 0, numAll[largestNum]);
            
        }
        
        console.log('the value of i is ' + numAll[i] + 
        ' and the value of j is ' + numAll[j]);
        /*
        for (let j = 1; j ; j++) {
                //[1,2,3,4,4,4,7,7,12,12,13]
                           first numAll[i] that is different from numAll[i]
                           this happens first at numAll[5];
                            swap value at numAll[5], which is 4, 
                            with next sorted number that comes after
                            */
            
    }
    return numAll;
};
//console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([1,1,1,1,2,2]));
/*
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2,-1,-1,0,1]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
*/