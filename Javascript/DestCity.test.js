const destCity = require('./DestCity')

test("Checks the destination city with an array", () => {
    expect(destCity([["B","C"],["D","B"],["C","A"]])).toBe("A")
})