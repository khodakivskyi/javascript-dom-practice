const colors = [
    ['darkred', 'red', 'darkorange'],
    ['yellow', 'lightgreen', 'forestgreen'],
    ['cyan', 'royalblue', 'navy']
];

const colorTable = document.createElement("table");
colors.forEach((line) => {
    const row = document.createElement("tr");
    line.forEach((color) => {
        const td = document.createElement("td");
        td.style.background = color;
        td.dataset.color = color;
        row.appendChild(td);
    })
    colorTable.appendChild(row);
})

document.body.appendChild(colorTable);

let selectedColor;

colorTable.addEventListener("click", (e) => {
    if (e.target.tagName === "TD") {
        document.querySelectorAll("td").forEach(td => {
            td.classList.remove("active");
        })

        e.target.classList.toggle("active");
        selectedColor = e.target.dataset.color;
    }
})

const resTable = document.querySelector("#resTable");
resTable.addEventListener("click", (e) => {
    if (e.target.tagName === "TD") {
        e.target.style.background = selectedColor;
    }
})
