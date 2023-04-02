function merge(arr1, arr2) {
    //recommend use while loop
    let results = [];
    let i =0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) { //if both i and j are still iterating
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length) { //if only i is iterating
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) { //if only j is iterating
        results.push(arr2[j]);
        j++;
    }
    return results;
        /*
        create an empty array, take a look at the smallest values in each input array
        while there are still values we haven't looked at..
            if the value in teh first array is smaller than the value in the second array,
            push the value in the first array into our results and move on to the next value in the first array
          if the value in teh first array is larger than the value in the second array,
            push the value in the second array into our results and move on to the next value in the first array  
            Once we exhaust one array, push in all remaining values from teh other array

        merge([1, 10, 50] [2,14,99,100]) while there is still data in both for us to look at..
        [1]

                mergeSort([10,24,76,73]);
            mergeSort(10,24);
        mergeSort([10]);

            */
}
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length /2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
console.log(merge([1,10,50], [2,14,99,100]));
//       i 0 1 2 3     0  1  2  3