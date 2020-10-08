const oddCells = require('./CellsWithOddValuesInMatrix')

const n = 2, m = 3, indices = [[0,1],[1,1]];
const output = 6;

test("The number of cells within a matrix with an odd value", () => {
    expect(oddCells(n, m, indices)).toStrictEqual(output);
})