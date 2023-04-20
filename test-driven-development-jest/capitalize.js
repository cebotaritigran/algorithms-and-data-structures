export const capitalize = (string) => {
    let slicedString = "";
    console.log(string.length)
    for (let i = 0; i < string.length; i++) {
        if (parseInt(string.charAt(i)) == Number) {
            slicedString += string.slice(i)
            console.log(string.slice(i))
        }
    }

    let capatalizedString = slicedString + string.charAt(0).toUpperCase() + string.slice(1)
    console.log(capatalizedString)
    return capatalizedString

}

export default capitalize 