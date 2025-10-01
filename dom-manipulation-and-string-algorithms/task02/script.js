let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea earum incidunt minima nihil. Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum, eos laboriosam, modi nemo, quasi quos sint voluptatibus!`;

//1
console.log(text[12] + text[6] + text[18] + text[25]);

//2
console.log(text.toLowerCase());

//3
let target = 'in';
let pos = 0;
while (true) {
    let foundPos = text.indexOf(target, pos);
    pos = foundPos + 1;
    if (foundPos === -1) break;
    console.log(foundPos);
}

//4
console.log(text.split(' '));

//5
let textInverted = '';
for (let i = text.length - 1; i >= 0; i--) {
    textInverted += text[i];
}
console.log(textInverted);

//6
function ucFirst(txt) {
    return txt[0].toUpperCase() + txt.slice(1);
}
console.log(ucFirst('some text'));
