// add whatever parameters you deem necessary
function constructNote(message, letters) {

    if (!message) return true;
    if (!letters) return false;

    function isValidChar(char) {
        const validChars = "abcdefghijklmnopqrstuvwxyz";
        return validChars.indexOf(char) != -1;
    }

    function charCounter(str) {
        count = {};
        for (let char of str.toLowerCase()) {
            if (!isValidChar(char)) { continue; }
            if (count[char]) {
                count[char]++;
            }
            else {
                count[char] = 1;
            }
        }
        return count;
    }

    const msgCount = charCounter(message);
    const ltrCount = charCounter(letters);

    for (let char in msgCount) {
        if (!ltrCount[char] || ltrCount[char] < msgCount[char]) return false;
    }

    return true;
}

module.exports = constructNote;