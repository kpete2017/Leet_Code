var oddCells = (M, N, A, odd=0) => {
    let m = [...Array(M)].map(() => Array(N).fill(0));
    for (let [r, c] of A) {
        for (let i=0; i < M; ++i) ++m[i][c];
        for (let j=0; j < N; ++j) ++m[r][j];
    }
    for (let row of m)
        odd += [...row].filter(x => x % 2).length;
    return odd;
};

module.exports = oddCells