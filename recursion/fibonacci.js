let fibonacciNumbers = [];
let firstNumber = 0;
let secondNumber = 1;
let additionOfTwoNumbers = 0;


function fibIteration(number) {

    for (let i = 0; i < number; i++) {
        fibonacciNumbers.push(firstNumber); // 0 
        additionOfTwoNumbers = firstNumber + secondNumber; // 1
        firstNumber = secondNumber; // 1
        secondNumber = additionOfTwoNumbers; // 1
    }

}


function fibRecursion(number) {
    if (number < 2) {
        return number;
    } else {
        return (fibRecursion(number - 1) + fibRecursion(number - 2));
    }
}

console.log(fibIteration(8));
console.log(fibonacciNumbers);

