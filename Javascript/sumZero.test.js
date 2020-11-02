const sumZero = require('./sumZero')

test("creates a an array containing n unique integers that add to 0", () => {
    expect(sumZero(5)).toEqual([0,1,-1,3,-3])
})