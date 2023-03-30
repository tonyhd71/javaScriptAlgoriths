function selectionSort(arr) {
    for (let i =0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i +1; j <arr.length; j++ ) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
            if (i !== lowest) {
                console.log(i,lowest);
                let temp = arr[i];
                arr[i] = arr[lowest];
                arr[lowest] = temp;
            }
        }
        
    }
    return arr;
}
/* SWAP 
let temp = arr[j];
arr[j] = arr[j+1];
arr[j+1] = temp;
we swap our first smallest value with 
the position of the lowest value;
0 1
0 2
0 3
0 4
1 2
1 3
1 4
2 3
2 4
3 4
*/
//console.log(selectionSort([5,3,4,1,2]));

selectionSort([0,2,34,22,10,19,17]);