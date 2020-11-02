const maxProduct = require('./MaxProduct');

const input = [10,2,5,2];
const output = 36;

test("Checks the max product that can be gained by multiplying two indices", () => {
    expect(maxProduct(input)).toStrictEqual(output)
})