function isNumber(char) {
    return /^\d$/.test(char);
}

export const capitalize = (string) => {
    let slicedString = "";
    let slicedNumbers = string;
    for (let i = 0; i < string.length; i++) {
        if (isNumber(string.charAt(i)) == false) {
            slicedNumbers = string.slice(0, i)
            slicedString = slicedNumbers + string.charAt(i).toUpperCase() + string.slice(i + 1);
            console.log(slicedString)
            return slicedString
        }
    }

    //let capatalizedString = slicedString + string.charAt(0).toUpperCase() + string.slice(1)
    //console.log(capatalizedString)

}

export default capitalize 