const blocks = [];

for (let j = 0; j < 6; j++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.innerText = 'block' + j;
    blocks.push(block);
    document.body.appendChild(block);
}

document.body.addEventListener("click", e => {
    if (e.target.classList.contains("block")) {
        if (e.ctrlKey || e.metaKey) {
            e.target.classList.toggle('selected');
        }
        else{
            blocks.forEach(block => {
                block.classList.remove("selected");
            })
            e.target.classList.toggle("selected")
        }
    }
})
