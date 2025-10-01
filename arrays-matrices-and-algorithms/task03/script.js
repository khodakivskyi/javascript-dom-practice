let matrix = [
    [12, 7, 9, 15, 3],
    [4, -11, 8, 2, 10],
    [6, 14, -1, 13, 5],
    [-9, 0, 7, 12, 8],
    [3, 10, 6, 14, 2],
    [11, -5, 13, 1, 4],
    [8, 2, 12, 12, -9]
];

let n = 7, m = 5, positiveCount = 0, rowsWithoutZero = 0;
let dobutokInRowsWithoutNegative = [], columnsWithoutNegativeSum = [],
    columnsWithNegativeSum = [];

matrix.forEach((row) => {
    let zero = false;
    let hasNegative = false;
    let dobutokInRow = 1;

    row.forEach((element) => {
        if (element > 0) positiveCount++;
        if (element === 0) zero = true;
        if (element < 0) hasNegative = true;

        if (!hasNegative) dobutokInRow *= element;
    });

    if (!zero) rowsWithoutZero++;
    if (!hasNegative) dobutokInRowsWithoutNegative.push(dobutokInRow);
});

let columnWithZero = 0;
for (let j = 0; j < m; j++) {
    let zero = false, columnWithoutNegative = false, columnWithoutNegativeSum = 0,
        columnWithNegativeSum = 0;
    for (let i = 0; i < n; i++) {
        if (matrix[i][j] === 0) zero = true;
        if (matrix[i][j] < 0) columnWithoutNegative = true;

        if (!columnWithoutNegative) columnWithoutNegativeSum += matrix[i][j];
        else columnWithNegativeSum += matrix[i][j];
    }
    if (zero) columnWithZero++;
    if (!columnWithoutNegative) columnsWithoutNegativeSum.push(columnWithoutNegativeSum);
    else columnsWithNegativeSum.push(columnWithNegativeSum);
}

let maxSeries = 0, rowIndexWithMax = 0;
matrix.forEach((row, i) => {
    let maxInRow = 1, current = 1;
    for (let j = 1; j < m; j++) {
        if (row[j] === row[j + 1]) current++;
        else current = 1;

        maxInRow = Math.max(maxInRow, current);
    }
    if (maxInRow > maxSeries) {
        maxSeries = maxInRow;
        rowIndexWithMax = i;
    }
})

let matrixT = [];
for (let i = 0; i < m; i++) {
    matrixT[i] = [];
    for (let j = 0; j < n; j++) {
        matrixT[i][j] = matrix[j][i];
    }
}

console.log(`кількість додатних елементів ${positiveCount}`);
console.log(`кількість рядків, які не містять жодного нульового елемента ${rowsWithoutZero}`);
console.log(`кількість стовпців, які містять хоча б один нульовий елемент ${columnWithZero}`);
console.log(`номер рядка, в якому знаходиться найдовша серія однакових елементів ${rowIndexWithMax}`);
console.log(`добуток елементів в тих рядках, які не містять від’ємних елементів ${dobutokInRowsWithoutNegative}`);
console.log(`суму елементів в тих стовпцях, які не містять від’ємних елементів ${columnsWithoutNegativeSum}`);
console.log(`суму елементів в тих стовпцях, які  містять хоча б один від’ємний елемент ${columnsWithNegativeSum}`);
console.log(`транспоновану матрицю ${matrixT}`);


matrix = [
    [12, 7, 9, 15, 3],
    [4, -11, 8, 2, 10],
    [6, 14, -1, 13, 5],
    [-9, 0, 7, 12, 8],
    [3, 10, 6, 14, 2]
];

n = matrix.length;
m = matrix[0].length;

let maxSum = 0;
for (let d = -4; d <= 4; d++) {
    let dSum =0;
    for (let i = 0; i < n; i++) {
        let j = i + d;
        if (j >= 0 && j < m){
            dSum+=matrix[i][j];
        }
    }
    if (dSum > maxSum) maxSum = dSum;
}
console.log(maxSum);

let minSum = Infinity;
for (let d = 0; d <= n + m - 2; d++) {
    let dSum = 0;
    for (let i = 0; i < n; i++) {
        let j = d - i;
        if (j >= 0 && j < m) {
            dSum += Math.abs(matrix[i][j]);
        }
    }
    if (dSum < minSum) minSum = dSum;
}
console.log(minSum);
