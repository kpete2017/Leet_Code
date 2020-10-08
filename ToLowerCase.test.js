const toLowerCase = require('./ToLowerCase');

const input = 'Hello'
const output = 'hello'

test("Takes string and makes it lowercase", () => {
    expect(toLowerCase(input)).toEqual(output)
})