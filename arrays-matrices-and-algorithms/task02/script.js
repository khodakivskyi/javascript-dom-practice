document.querySelectorAll('div.table').forEach(table => {
    table.querySelectorAll('td').forEach((td, i) => {
        if ((i+1) % 2 === 0) {
            td.classList.toggle('selected');
        }
    })
})