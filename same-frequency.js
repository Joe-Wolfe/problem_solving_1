// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {

    const num1Count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const num2Count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    function numCounter(arr, num) {
        while (num > 0) {
            arr[num % 10]++;
            num = Math.floor(num / 10)
        }
    }

    numCounter(num1Count, num1);
    numCounter(num2Count, num2);


    for (let i = 0; i < 10; i++) {
        if (num1Count[i] != num2Count[i]) { return false }
    }
    return true;

}

module.exports = sameFrequency;
