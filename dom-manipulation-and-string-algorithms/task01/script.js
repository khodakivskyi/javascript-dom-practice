//1.1
document.querySelector('body').style.fontFamily = "Arial";

let paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraph => {
    paragraph.style.padding = "5px";
    paragraph.style.width = "40%";
    paragraph.style.margin = "0 auto 16px";
});
paragraphs[0].style.color = "orange";
paragraphs[0].style.background = "yellow";
paragraphs[0].style.fontSize = "16px";
paragraphs[0].style.textAlign = "center";

paragraphs[1].style.color = "blue";
paragraphs[1].style.background = "lightblue";
paragraphs[1].style.fontSize = "14px";
paragraphs[1].style.textAlign = "right";

paragraphs[2].style.color = "red";
paragraphs[2].style.background = "pink";
paragraphs[2].style.fontSize = "12px";
paragraphs[2].style.textAlign = "left";

//1.2
let trs = document.querySelectorAll('tr');

trs.forEach((tr, trI) => {
    let tds = tr.querySelectorAll(' td');
    tds.forEach((td, tdI) => {
        if ((trI + tdI ) % 2 === 0)
            td.classList.toggle('selected');
    })
})