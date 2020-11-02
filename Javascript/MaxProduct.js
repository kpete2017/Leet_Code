const maxProduct = (nums) => {
    nums = nums.sort((a, b) => { return a - b });
    return (nums[nums.length - 1] - 1) * (nums[nums.length - 2] -1); 
}

module.exports = maxProduct;