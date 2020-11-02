const findNumbers = require('./FindNumbers');

const input = [12,345,2,6,7896];
const output = 2


test("checks how many even numbers of digits are present in an array", () => {
    expect(findNumbers(input)).toStrictEqual(output);
})

const input2 = [555,901,482,1771];
const output2 = 1

test("checks how many even numbers of digits are present in an array", () => {
    expect(findNumbers(input2)).toStrictEqual(output2);
})