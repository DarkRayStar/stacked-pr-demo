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

// This added a as the new feature 6 to
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

console.log(isPalindrome("racecar")); // Output: true
