import analyze from './analyzeArray';

test('Check if given array is returned with correct object', () => {
    expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

test('Check if given second array is returned with correct object', () => {
    expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});