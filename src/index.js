module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length === 0) return [];

    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2) arr.push(...matrix[i].reverse());
        else arr.push(...matrix[i]);
    }

    return arr;
};
