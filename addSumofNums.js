/*function addUpTo(n) {
    let total = 0;
    n = parseInt(n);
    for (let i = 1; i <= n; i++) {
        total += i
    }
    return total;
}

function addUpTo(n) {
    return n * (n + 1) / 2;
}

console.log(addUpTo(15));

let array1= ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));

let counter = 0;
let dupliCate = 0;
function same(arrayOne, arrayTwo) {
    let arraysLength = arrayOne.length;
    for (let i = 0; i < arraysLength; i++) {
       // if (arrayOne[i] * arrayOne[i] == arrayTwo[i]) {
        if (arrayTwo.includes(arrayOne[i] * arrayOne[i])) {
            counter += 1;
            console.log(`${counter} is counter, first array ${arrayOne[i] * arrayOne[i]}`);
        } else {
            console.log('number squared is not included in array two');
        }
    } 
    if (counter == 3) {
        return true;
    }
    
}
console.log(same([2, 3, 4], [4, 9, 16]));
*/
//function
function validAnagram(first, second) {
    if (first.length != second.length) {
        return false
    }
    const lookupObj = {};

    for (let i = 0; i < first.length; i++) {
        let value = first[i];
        // value is the letter
    // if letter exists,        increment,     otherwise set to 1
    lookupObj[value] ? lookupObj[value] += 1 : lookupObj[value] = 1;
    }
    for (let i = 0; i < second.length; i++) {
        let value = second[i];
        // can't find letter or letter from lookup object we created, so is zero then its not an anagram
        if (!lookupObj[value]) {
            return false;
        } else {
            lookupObj[value] -= 1;
        }
    }
    return true;
}
{
    //we initialize at at 1, then n is set to 1, then a again so we increment a ....
    //this is the lookup object the first for loop created
    a:3
    n:1
    g:1
    r:1
    m:1
    
}
validAnagram('anagram', 'nagaram');

/*
console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); //false
console.log(validAnagram('qwerty', 'keywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true
*/