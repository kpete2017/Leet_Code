var sumZero = function(n) {
    result = n % 2 === 0 ? [] : [0] 
    for(let i=1;i<n;i+=2){
        result.push(i,-i)
    }
    return result;
};
module.exports = sumZero