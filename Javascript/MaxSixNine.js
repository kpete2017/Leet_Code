const maxSixNine = (num) => {
    let numArray = num.toString().split('')
    let maxNum = num;
    for(let i = 0; i < numArray.length; i++) {
        let tempArray = numArray;
        if(tempArray[i] === "6") {
            tempArray[i] = "9";
            maxNum = parseInt(tempArray.join(''));
            return maxNum;
        }
    }

    return num;
}

module.exports = maxSixNine;