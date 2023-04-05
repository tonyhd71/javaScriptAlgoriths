function pivot (arr, start =0, end = arr.length+1) {
    function swap(array,i,j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let pivot = arr[start];
    let swapIdx = start;//this index will keep track where to swap the pivot at the end
    for (let i = start +1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            /*is 4 greater than 8? no, so we do nothing. is 4 greater than 2? yes so we increment swapIdx by 1, */
            swapIdx++;
            swap(arr,swapIdx,i); 
            console.log(arr);
        }
        swap(arr,start,swapIdx);
        return swapIdx;
    }
}
function quickSort(arr, left=0,right=arr.length -1) {
    if (left < right) {
        let pivotIndex = pivot(arr,left,right); //3
    //left
        quickSort(arr,left,pivotIndex-1);
    //right
        quickSort(arr, pivotIndex+1,right);
    }
    return arr;
}
// 3
//  pivot([4,8,2,1,5,7,6,3]) <----Final array 
pivot([4,8,2,1,5,7,6,3])
/*
[4,8,2,1,5,7,6,3]
[4,2,8,1,5,7,6,3]
[4,2,1,8,5,7,6,3]
[4,2,1,8,5,7,6,3]
[4,2,1,3,5,7,6,8]
*/
//         l r
quickSort([4,6,9,1,2,5,3]);
/*
// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//         4
// [3,2,1    6,9,5]
//      3       6
//2,1        5    9
    2
  1
*/