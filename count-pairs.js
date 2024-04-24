// add whatever parameters you deem necessary
function countPairs(arr, sum) {

    const prevNums = new Set();
    let pairCount = 0;

    for (let num of arr) {
        if (prevNums.has(sum - num)) {
            pairCount++;
        }
        prevNums.add(num);
    }
    return pairCount;

}

module.exports = countPairs;
