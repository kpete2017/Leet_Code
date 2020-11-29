const minAddToMakeValid = require('./MinAddToMakeValid');

test("Minimum number of parentheses to add in order to make string valid", () => {
    expect(minAddToMakeValid('())')).toStrictEqual(1);
})