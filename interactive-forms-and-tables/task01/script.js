const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const tbody = document.querySelector("tbody");
const form = document.querySelector("#personForm");

form.addEventListener("submit", addPerson);

function addPerson(event) {
    event.preventDefault();

    const index = tbody.querySelectorAll("tr").length;
    let rowItems = [index, firstName.value.trim(), lastName.value.trim()];

    const row = document.createElement("tr");

    rowItems.forEach((item) => {
        const td = document.createElement("td");
        td.innerText = item;
        row.appendChild(td);
    })

    tbody.appendChild(row);

    firstName.value = "";
    lastName.value = "";
}