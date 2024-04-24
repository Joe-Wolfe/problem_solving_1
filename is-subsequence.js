

// add whatever parameters you deem necessary
function isSubsequence(subStr, fullString) {

    let subStrIndex = 0;
    let fullStrIndex = 0;

    while (fullStrIndex < fullString.length) {
        if (fullString[fullStrIndex] === subStr[subStrIndex]) {
            subStrIndex++;
        }
        if (subStrIndex === subStr.length) return true;
        fullStrIndex++;
    }

    return false;


}

module.exports = isSubsequence;