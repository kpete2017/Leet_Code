var minAddToMakeValid = function(S) {
    let left = 0;
    let right = 0;
    
    for(let i = 0; i < S.length; i++) {
        if(S[i] == '(') {
            left++;
        } else{
            left > 0 ? left-- : right++;
        }
    }
    
      return left + right;
};

module.exports = minAddToMakeValid