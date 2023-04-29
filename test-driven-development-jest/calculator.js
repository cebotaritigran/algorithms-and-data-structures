
export default class Calculator {
   constructor(numberOne, numberTwo) {
      this.numberOne = numberOne
      this.numberTwo = numberTwo
   }

   sum(numberOne, numberTwo) {
      return numberOne + numberTwo;
   }

   subtract(numberOne, numberTwo) {
      return numberOne - numberTwo;
   }

   multiply(numberOne, numberTwo){
      return numberOne * numberTwo;
   }

   divide(numberOne, numberTwo){
      return numberOne / numberTwo;
   }
}



