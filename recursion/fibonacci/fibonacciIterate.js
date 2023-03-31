// Using iteration, write a function fibs which takes a number and returns 
// an array containing that many numbers 
// from the fibonacci sequence.
// Using an example input of 8, this method should return 
// the array[0, 1, 1, 2, 3, 5, 8, 13].

function fibonacci(number) {
    if (number == 1) {
        return [0];
    } else {

        let listOfNumbers = [0, 1]
        let fibonacciNumber = 0;

        for (let i = 0; i < number - 2; i++) {
            fibonacciNumber = listOfNumbers[i] + listOfNumbers[i + 1];
            listOfNumbers.push(fibonacciNumber);
        }
        return listOfNumbers;
    }
}

console.log(fibonacci(4));
