const maxProfit = require('./MaxProfit')
const prices = [1, 3, 2, 8, 4, 9]
const fee = 2
const output = 8

test("Checks the best possible time to buy and sell a stock with a fee", () => {
    expect(maxProfit(prices, fee)).toStrictEqual(output);
})