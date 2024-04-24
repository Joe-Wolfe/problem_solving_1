// add whatever parameters you deem necessary
function averagePair(numArr, target) {

    let lowIndex = 0;
    let highIndex = numArr.length - 1;

    while (lowIndex < highIndex) {
        average = (numArr[lowIndex] + numArr[highIndex]) / 2;

        if (target === average) { return true; }

        if (target > average) {
            lowIndex++;
        }
        else {
            highIndex--;
        }
    }
    return false;
}

module.exports = averagePair
