function addUpTo(n) {
    let total = 0;
    n = parseInt(n);
    for (let i = 1; i <= n; i++) {
        total += i
    }
    return total;
}
console.log(addUpTo(8));
