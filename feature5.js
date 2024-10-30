// Simulate initial state
function factorial(n) {
    // Below console log is added to simulate a change after creating initial PRs with ghstack
    console.log('Generating factorial of ' + n);
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); // 120
