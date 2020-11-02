var findNumbers = function(nums) {
    let count = 0;
    nums.forEach( idx => {
        numLength = idx.toString().length
        if(numLength % 2 === 0) {
            count++;
        } 
    })
    return count;
};

module.exports = findNumbers;