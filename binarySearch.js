function binarySearch(arr, value) {
    let leftPointer = arr.indexOf(arr[0]);
    let rightPointer = arr.indexOf(arr[arr.length -1]);
    let midpoint = Math.round(rightPointer / 2);
    // 5 -> return midpoint;
    if (!arr.includes(value)) return -1;
    if (value === arr[0]) return arr.indexOf(value);
    if (value === arr[arr.length -1]) return arr.indexOf(value);
    if (value === arr[midpoint]) return arr.indexOf(value);
    while (leftPointer < rightPointer) {
        // 5 -> return midpoint; 
        if (value < arr[midpoint]) {
            //rightPointer = arr.indexOf(arr[midpoint]);
            rightPointer = midpoint;
            midpoint = Math.floor(rightPointer/2);
            // 4 -> return rightPointer;
            // 19 -> return midpoint;
            if (value === arr[midpoint]) return arr.indexOf(value);
            if (value < midpoint) {
                rightPointer = Math.round(arr.indexOf(midpoint)/2);
                midpoint = arr[Math.round(rightPointer / 2)];
                if (value === arr[midpoint]) return arr.indexOf(value);
                if (value < arr[midpoint]) {
                    rightPointer = arr.indexOf(midpoint);
                    midpoint = arr[Math.round(rightPointer / 2)];
                    if (value === arr[midpoint]) return arr.indexOf(midpoint);
                    if (value < arr[midpoint]) {
                        rightPointer = midpoint;
                        midpoint = arr[Math.round(rightPointer / 2)];
                        if (value === midpoint) return arr.indexOf(value);
                    }
                }
            }
        }
        if (value > arr[midpoint]) {
            // 5 -> return leftPointer;
            leftPointer = midpoint;

            midpoint = arr[Math.round((rightPointer + leftPointer)/2)];

            //return leftPointer;
            if (value === midpoint) return arr.indexOf(value);
            if (value > leftPointer) {
                leftPointer = arr.indexOf(midpoint);
                // 7 -> return leftPointer;
                midpoint = arr[Math.round((rightPointer + leftPointer)/2)];
                // 7 -> return midpoint;
                if (value === midpoint) return arr.indexOf(value);  
            }          
        }
    }
}
console.log(binarySearch([2,4,6,8,10,12,14],12));