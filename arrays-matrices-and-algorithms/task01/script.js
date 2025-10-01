//1.1
let paragraphs = document.querySelectorAll('p');
let count = [];
paragraphs.forEach((paragraph, i) => {
    count[i] = paragraph.innerText.length;
})
console.log(count);

//1.2
let arr = [20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3];

let min = arr[0], max = arr[0];
let evenCount = 0, oddCount = 0, twoCharCount = 0, vid = 0, dot = 0;
arr.forEach((element) => {
    if (element > max) max = element;
    if (element < min) min = element;

    if (element % 2 === 0) evenCount++;
    else oddCount++;

    if (element >= 0) dot++;
    else vid++;

    if (element >= 10 || element <= -10) twoCharCount++;
})
console.log(min, max, evenCount, oddCount, twoCharCount, dot, vid);

function compare(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
}
arr.sort(compare);
console.log(arr);

console.log(arr.reverse());