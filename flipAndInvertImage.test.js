const flipAndInvertImage = require('./flipAndInvertImage')


const input = [[1,1,0],[1,0,1],[0,0,0]];
const output = [[1,0,0],[0,1,0],[1,1,1]];

test('Whether the matrix is flipped and inverted', () => {
    expect(flipAndInvertImage(input)).toStrictEqual(output);
})