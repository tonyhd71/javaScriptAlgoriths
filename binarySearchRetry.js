function binarySearch(arr, value) {
    let lastValue = arr.indexOf(arr[arr.length - 1]);
    let firstValue = arr.indexOf(arr[0]);
    let leftPointer = firstValue;
    let rightPointer = lastValue;
    let middlePoint = arr[Math.floor((rightPointer+leftPointer)/2)];
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
console.log(binarySearch([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30], 18));