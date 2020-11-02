const maxSixNine = require('./MaxSixNine')

const input = 9669, output = 9969

test("Largest number that can be made by replacing any six or nine", () => {
    expect(maxSixNine(input)).toStrictEqual(output);
})