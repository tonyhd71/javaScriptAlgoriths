function binarySearch(arr, value) {
    let lastValue = arr.indexOf(arr[arr.length - 1]);
    let firstValue = arr.indexOf(arr[0]);
    let leftPointer = firstValue;
    let rightPointer = lastValue;
    let middlePoint = arr[Math.floor((rightPointer+leftPointer)/2)];
    if (!arr.includes(value)) return -1;
    if (value === arr[0]) return arr.indexOf(value);
    if (value === arr[arr.length -1]) return arr.indexOf(value);
    while(leftPointer < rightPointer) {
        if (value === middlePoint) return arr.indexOf(value);  
        if (value < middlePoint) {
            reassignRightPointer();
            reAssignMiddlePoint();
            if (value === middlePoint) return arr.indexOf(value);
        } 
        if (value > middlePoint) {
            reassignLeftPointer();
            middlePointWhenValGreater();
            if (value === arr[leftPointer]) return arr.indexOf(value);
            if (value === middlePoint) return arr.indexOf(value);
        }
    }
    function reassignRightPointer() {
        return rightPointer = arr.indexOf(middlePoint);
    }
    function reAssignMiddlePoint() {
        return middlePoint = arr[Math.round((rightPointer+leftPointer)/2)];
    }
    function reassignLeftPointer() {
        return leftPointer = arr.indexOf(middlePoint) + 1; // we don't want left pointer to be same as old right pointer
    }
    function middlePointWhenValGreater() {
        return middlePoint = arr[Math.round((rightPointer + leftPointer)/2)];
    }
}
console.log(binarySearch([2,5,6,9,13,15,28], 28));
/*BELOW IS SHORT CLEAN VERSION FROM TUTORIAL
function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length -1;
    let middle = Math.floor((start,end) /2);
    while(arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle -1;
        else start = middle + 1;
        middle = Math.floor((start,end) /2);
    }
    return arr[middle] === elem? middle : -1;
}
*/