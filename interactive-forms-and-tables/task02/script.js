const form = document.querySelector("#updateTable");
const table = document.createElement("table");
const textarea = document.querySelector("textarea");

form.addEventListener("submit", updateTable);

function updateTable(event) {
    event.preventDefault();

    table.innerHTML = "";
    const content = textarea.value.split("\n");

    content.forEach((c) => {
        const row = document.createElement("tr");
        const nums = c.split('');
        nums.forEach((num) => {
            const td = document.createElement("td");
            if (Number(num) === 1) {
                td.style.backgroundColor = "blue";
            }
            row.appendChild(td);
        });
        table.appendChild(row);
    });

    document.body.appendChild(table);
    textarea.value = '';
}