export const cipher = (string, key) => {

    let x = ""
    let encryptedText = "";
    let character = "";
    for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) >= 97) {
            x = string.charCodeAt(i) - 97;
            x = (x + key) % 26;
            character = String.fromCharCode(x + 97)
        } else if (string.charCodeAt(i) >= 65) {
            x = string.charCodeAt(i) - 65;
            x = (x + key) % 26;
            character = String.fromCharCode(x + 65)
        } else if (string.charCodeAt(i) < 65 || string.charCodeAt(i) > 90 || string.charCodeAt(i) < 97 || string.charCodeAt(i) > 122) {
            x = string.charCodeAt(i)
            character = String.fromCharCode(x)
        }
        encryptedText += character
    }
    console.log(encryptedText)
    return encryptedText;
}

export default cipher 