const uniqueMorseCode = require('./UniqueMorseCode')

const input = ["gin", "zen", "gig", "msg"];
const output = 2;

test("Checks if a concatinated word maches another in morse code", () => {
    expect(uniqueMorseCode(input)).toStrictEqual(output)
})