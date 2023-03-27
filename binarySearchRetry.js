function binarySearch(arr, value) {
    //is value less than 
    let lastValue = arr.indexOf(arr[arr.length - 1]);
    let firstValue = arr.indexOf(arr[0]);
    let leftPointer = firstValue;
    let rightPointer = lastValue;
    let middlePoint = arr[Math.floor((rightPointer+leftPointer)/2)];
    if (value === firstValue) return arr.indexOf(value);
    while(leftPointer < rightPointer) {
        //return middlePoint is 10
        //return rightPointer; is 9
        if (value === middlePoint) return arr.indexOf(value);  
        if (value < middlePoint) {
           //return rightPointer; //still 9
            reassignRightPointer();
            //return rightPointer; is 4
            reAssignMiddlePoint();
            //return middlePoint; midpoint is 6
            if (value === middlePoint) return arr.indexOf(value);
            if (value < middlePoint) {
                //return rightPointer; stll 4
                reassignRightPointer();
                //return rightPointer; is 2
                //return middlePoint; is 6
                reAssignMiddlePoint();
                //return middlePoint; is 4
                if (value === middlePoint) return arr.indexOf(value);
            }
        } 
        if (value > middlePoint) {
            alert('bigger');
        }
    }
    function reassignRightPointer() {
        return rightPointer = arr.indexOf(middlePoint);
    }
    function reAssignMiddlePoint() {
        return middlePoint = arr[Math.round((rightPointer+leftPointer)/2)];
    }
        //if yes, return value
        //if no, is value less than middlePoint?
            //if yes, rightPointer equal to middle value. 
            //if no, leftPointer is middleValue
}
console.log(binarySearch([2,4,6,8,10,12,14,16,18,20], 4));