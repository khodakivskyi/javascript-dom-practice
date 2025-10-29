const colors = [
    ['darkred', 'red', 'darkorange'],
    ['yellow', 'lightgreen', 'forestgreen'],
    ['cyan', 'royalblue', 'navy']
];

const table = document.createElement("table");
colors.forEach((line) => {
    const row = document.createElement("tr");
    line.forEach((color) => {
        const td = document.createElement("td");
        td.style.background = color;
        td.dataset.color = color;
        row.appendChild(td);
    })
    table.appendChild(row);
})

document.body.appendChild(table);

const block = document.createElement("div");
document.body.appendChild(block);

const selectedColors = [];

table.addEventListener("click", (e) => {
    if (e.target.tagName === "TD") {
        e.target.classList.toggle("active");

        if (e.target.classList.contains("active")) {
            selectedColors.push(e.target.dataset.color);
        }
        else{
            const index = selectedColors.indexOf(e.target.dataset.color);
            if (index > -1) {
                selectedColors.splice(index, 1);
            }
        }

        if(selectedColors.length > 0) {
            const gradient = selectedColors.join(', ');
            block.style.background = `linear-gradient(to bottom, ${gradient})`;
        } else {
            block.style.background = "";
        }
    }
})
