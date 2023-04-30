import cipher from './caesarCipher';

test('Check if first letter is capatalized', () => {
    expect(cipher("test")).toBe("Test");
});