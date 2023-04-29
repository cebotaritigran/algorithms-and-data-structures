function isAlphaNumeric(char) {
    return /^[a-zA-Z èàùìòÈÀÒÙÌéáúíóÉÁÚÍÓëäüïöËÄÜÏÖêâûîôÊÂÛÎÔç'-]*$/.test(char);
}

export const capitalize = (string) => {
    let slicedString = "";
    let slicedNumbers = string;
    for (let i = 0; i < string.length; i++) {
        if (isAlphaNumeric(string.charAt(i)) == true) {
            slicedNumbers = string.slice(0, i)
            console.log(string.charAt(i))
            slicedString = slicedNumbers + string.charAt(i).toUpperCase() + string.slice(i + 1);
            console.log(slicedString)
            return slicedString
        }
    }

    //let capatalizedString = slicedString + string.charAt(0).toUpperCase() + string.slice(1)
    //console.log(capatalizedString)

}

export default capitalize 