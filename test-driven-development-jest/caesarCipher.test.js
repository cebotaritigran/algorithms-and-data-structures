import cipher from './caesarCipher';

test('Check if text is encypted', () => {
    expect(cipher("test", 1)).toBe("uftu");
});

test('Check if another text is encrypted', () => {
    expect(cipher("hey", 1)).toBe("ifz");
});

test('Check if a text with z with a key of 1 becomes a', () => {
    expect(cipher("zebra", 1)).toBe("afcsb");
});

test('Check if a text with z and some capital letters is encrypted', () => {
    expect(cipher("zeBra", 1)).toBe("afCsb");
});

test('Check if a text with spaces is encrypted', () => {
    expect(cipher("zeBra Jump", 1)).toBe("afCsb Kvnq");
});

test('Check if a text with spaces and special characters is encrypted', () => {
    expect(cipher("zeBra Jump!!?", 1)).toBe("afCsb Kvnq!!?");
});