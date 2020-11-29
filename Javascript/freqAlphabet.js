var freqAlphabets = function(s) {
    let map = {
        "1": "a",
        "2": "b",
        "3": "c",
        "4": "d",
        "5": "e",
        "6": "f",
        "7": "g",
        "8": "h",
        "9": "i",
        "10#": "j",
        "11#": "k",
        "12#": "l",
        "13#": "m",
        "14#": "n",
        "15#": "o",
        "16#": "p",
        "17#": "q",
        "18#": "r",
        "19#": "s",
        "20#": "t",
        "21#": "u",
        "22#": "v",
        "23#": "w",
        "24#": "x",
        "25#": "y",
        "26#": "z",
    };
    let answer = "";
    for(let i = 0; i < s.length; i++) {
        if(s[i + 2] == "#") {
            answer += map[s[i] + s[i + 1] + s[i + 2]]
            i += 2
        } 
        else if(s[i] != "#") {
            answer += map[s[i]];
        }    
    }
    return answer
};

module.exports = freqAlphabets