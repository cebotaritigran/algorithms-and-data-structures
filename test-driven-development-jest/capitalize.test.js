import capitalize from './capitalize';

test('Check if first letter is capatalized', () => {
  expect(capitalize("test")).toBe("Test");
});

test('Check if first letter is capatalized', () => {
  expect(capitalize("Test")).toBe("Test");
});

test('Check if first letter in a capatalized word is a capatalized word', () => {
  expect(capitalize("TEST")).toBe("TEST");
});

test('Check if first letter in 2 word string is capatalized', () => {
  expect(capitalize("test test")).toBe("Test test");
});

test('Check if first letter is capatalized in a word with numbers', () => {
  expect(capitalize("test123")).toBe("Test123");
});

test('Check if first letter is capatalized in a word with numbers in front', () => {
  expect(capitalize("123test")).toBe("123Test");
});

