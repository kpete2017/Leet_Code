const uniqueMorseCode = (words) => {

    morsecode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    let set = new Set()
    
    words.forEach( word => {
        let tempString = "";
        console.log(word)
        for( let c of word) {
            tempString += morsecode[c.charCodeAt(0)-'a'.charCodeAt(0)]
        }
        set.add(tempString)
    })
    return set.size;
}

module.exports = uniqueMorseCode;