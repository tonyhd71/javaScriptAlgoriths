//FIND NUMBER OF UNIQUE VALUES IN ARRAY USING TWO POINTERS
//USE O(n) time 
function countUniqueValues(arr) {
    if (arr.length == 1) {
        return 1;
    }
    if (arr.length === 0) {
        return 0;
    }
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        /* inside this for loop we will compare index array of i to index aray of j*/
        if (arr[i] !== arr[j]) {
            i++; //move i by one, then ..
            arr[i] = arr[j]; // set arr[i] to r[j]        
        }
    }
    return i + 1;
}
/*                if arr[i] is not equal to arr[j], we move i by one.
if they ARE equal, we do not do anything
    i
 [1,1,2,3,3,4,5,6,6,7]
      j                           */
//console.log(countUniqueValues([1,1,2,3,3,4,5,6,6,7]));
console.log([]);









/*
console.log(countUniqueValues([1,1,1,1,1,2]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2,-1,-1,0,1]));
*/