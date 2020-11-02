const flipAndInvertImage = (arr) => {

    let result = [];
    for(let i = 0; i < arr.length; i++) {
        let reversedArray = arr[i].reverse();
        for(let j = 0; j < reversedArray.length; j++) {
            reversedArray[j] = reversedArray[j] === 1 ? 0 : 1;
        }
        result.push(reversedArray);
    }
    return result;
}

module.exports = flipAndInvertImage