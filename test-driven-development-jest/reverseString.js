export const reverseString = (string) => {
    console.log(string)
    let newString = ""
    for (let i = 1; i <= string.length; i++) {
        newString += string[string.length - i]
    }
    console.log(newString);
    return newString;
}

export default reverseString 