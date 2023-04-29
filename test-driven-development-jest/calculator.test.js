import Calculator from './calculator';
const calculator = new Calculator;


test('Check if sum of two numbers is correct', () => {
  expect(calculator.sum(2, 2)).toBe(4);
});

test('Check if different sum of two numbers is correct', () => {
  expect(calculator.sum(2, 5)).toBe(7);
});

test('Check if two given numbers subtract', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test('Check if two given numbers multiply', () => {
  expect(calculator.multiply(2, 5)).toBe(10);
});

test('Check if two given numbers divide', () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test('Check if two given numbers divide', () => {
  expect(calculator.divide(6, 5)).toBe(1.2);
});

