//we gradually fill the first half of the array by gradualling inserting values one at a  time
function insertionSort(arr) {
    for (let i =1;i <arr.length; i++) {
        let currentVal = arr[i]; 
        for (let j = i -1; j >= 0 && arr[j] > currentVal; j-- ) {
            arr[j+1] =arr[j]; //compare to currentVal
        } //set j 1 less to i
    }
    return arr;
}
insertionSort([2,1,9,76,4])
//[1.2.9,76,4]