function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
let number = parseInt(prompt('Enter number:'));
let result = factorial(number);
console.log(`Factorial of ${number} is: ${result}`);
