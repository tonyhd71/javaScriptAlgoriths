function charCount(str) {
    let obj = {};
    for (let char of str) {
        char = str.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}
/*write out a function which takes in a string and returns counts of each character in the string.*/
charCount("aaaa") {
    /* 
    a:4 
    /*/
}
charCount("hello") {
    /*
    h:1,    
    e:1,
    l:2,
    o:1
    */
}
charCount("your pin number is 1234") {
    /*
    1:1,    
    2:1,
    3:1,
    4:1,
    b:1,    
    e:1,
    i:2,
    m:1,
    n:2,    
    o:1,
    p:1,
    r:2,
    s:1
    */
}