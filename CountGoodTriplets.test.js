const countGoodTriplets = require('./CountGoodTriplets');

const arr = [3,0,1,1,9,7];
const a = 7;
const b = 2;
const c = 3;

const output = 4;


test("checks whether the pair of triplets are good", () => {
    expect(countGoodTriplets(arr, a, b, c)).toStrictEqual(output);
})

const arr2 = [1,1,2,2,3];
const a2 = 0;
const b2 = 0;
const c2 = 1;

const output2 = 0;

test("checks whether the pair of triplets are good", () => {
    expect(countGoodTriplets(arr2, a2, b2, c2)).toStrictEqual(output2);
})
