export const analyze = (array) => {

    let averageNumber = 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += parseInt(array[i]);
    }
    averageNumber = sum / parseInt(array.length)
    let someObject = {
        average: averageNumber,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
    return someObject
}

export default analyze 