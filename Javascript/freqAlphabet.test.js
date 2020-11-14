const freqAlphabets = require('./freqAlphabet')

test("maps alphabet based on intiger value", () => {
    expect(freqAlphabets("10#11#12")).toBe("jkab")
})