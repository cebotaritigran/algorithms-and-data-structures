
let array = [];
// we set the first and second numbers accordingly
let firstNumber = 0;
let secondNumber = 1;
// the fibonacci number will become the sum of those two numbers
let fibonacciNumber = 0;
function fibonacci(number) {

    if (number === 0) {
        return array;
    } else {

        array.push(fibonacciNumber); // 0, 1, 1, 2, 3, 5, 8, 13
        // first number will become second number which is at first 1 because second number is 1 then 0, 1, 1, 2
        firstNumber = secondNumber;
        // the second number will become fibonacci number which is at first 0 because fibonacci number is 0 then 1, 1, 2, 3
        secondNumber = fibonacciNumber;
        // fibonacci number will become the sum of those two which is at first 1 because the sum is 1 then 1, 2, 3, 5
        fibonacciNumber = firstNumber + secondNumber;
        console.log(firstNumber, secondNumber, fibonacciNumber)
        return fibonacci(number - 1);
    }
}
console.log(fibonacci(8))


// without an array
function fibonacciWithoutArray(number) {
    if (number < 2) {
        return number;
    } else {
        return (fibonacciWithoutArray(number - 2) + fibonacciWithoutArray(number - 1))
    }
}
console.log(fibonacciWithoutArray(8))