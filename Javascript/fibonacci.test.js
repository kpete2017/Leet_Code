const fibonacci = require("./fibonacci")

const input = 6;
const output = [0,1,1,2,3,5];

test("Creates fibonacci sequence in array", () => {
    expect(fibonacci(input)).toStrictEqual(output);
})