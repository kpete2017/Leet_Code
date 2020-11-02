const fibonacci = (count) => {
    
    if(count === 1) return [0]
    if(count === 2) return [0, 1]

    let array = [0 , 1]

    for(let i = 2; i < count; i++) {
        let temp = array[i - 1] + array[i - 2];
        array.push(temp)
    }

    return array;
}

module.exports = fibonacci;