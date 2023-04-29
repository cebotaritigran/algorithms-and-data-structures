import reverseString from './reverseString';

test('Check if lower case string reversed', () => {
  expect(reverseString("test")).toBe("tset");
});

test('Check another string', () => {
  expect(reverseString("maybe")).toBe("ebyam");
});

test('Check string with special characters and numbers', () => {
  expect(reverseString("test123#")).toBe("#321tset");
});

test('Check string with spaces', () => {
  expect(reverseString("t est 123#")).toBe("#321 tse t");
});

test('Check string with spaces special characters capitalized', () => {
  expect(reverseString("T esT 123#")).toBe("#321 Tse T");
});
