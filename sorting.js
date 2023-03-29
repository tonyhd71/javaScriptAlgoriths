/*BUBBLE SORT
//ES5
function swap(arr,idx1,idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}
//ES 2015
const swap = (arr, idx1,idx2) => {
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
}

BUBBLESORT PSEUDOCODE
- Start looping from with a variable called i in the end of the array towards the beginning.
- Start an inner loop with a variable called j from the beginning until i-1
- if arr[j] is greater than arr[j+1], swap those 2 values
return the sorted array

//below is the simplistic way
function bubbleSort(arr) {
    for (let i =0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if (arr[j] > arr[j+1]) {
                //SWAP
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
*/
function bubbleSort(arr) {
    for (let i =arr.length ; i > 0; i--) {
        for (let j = 0; j < i-1; j++) {
            if (arr[j] > arr[j+1]) {
                //SWAP
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([37,45,29,8,12,88,-3]));