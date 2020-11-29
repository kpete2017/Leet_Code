class BinaryTree {
    value: number;
    left: BinaryTree | null;
    right: BinaryTree | null;

    constructor(value: number) {
        this.value = value;
        this.right = null;
        this.left  = null;
    }
}

export function branchSums(root: BinaryTree) {
    const sums: number[] = [];
    calculateBranchSums(root, 0, sums);
    return sums;
}

function calculateBranchSums(node :BinaryTree | null, runningSum: number, sums: number[] ) {
    if(!node) return;

    const newRunningSum: number = runningSum + node.value;
    if(!node.left && !node.right) {
        sums.push(newRunningSum);
        return;
    }
    calculateBranchSums(node.left, newRunningSum, sums)
    calculateBranchSums(node.right, newRunningSum, sums)
}