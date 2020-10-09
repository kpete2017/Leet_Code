const maxProfit = (prices, fee) => {

    let buy = Infinity;
    let sell = -Infinity;
    let maxProfit = 0;

    for(let i = 0; i < prices.length; i++) {
        if(i === prices.length - 1 && buy != Infinity) {
            sell = Math.max(sell, prices[i]);
            maxProfit += Math.max(0, sell - buy - fee);
        } else if(sell - prices[i] >= fee && buy != Infinity) {
            maxProfit += Math.max(0, sell - buy - fee);
            buy = prices[i];
            sell = -Infinity;
        } else if(prices[i] < buy) {
            buy = prices[i];
        } else {
            sell = Math.max(sell, prices[i]);
        }
    }
    return maxProfit
}

module.exports = maxProfit;