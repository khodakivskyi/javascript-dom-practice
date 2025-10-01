function createTable(rows, columns) {
    const table = document.createElement("table")

    for (let i = 0; i < rows; i++) {
        const row = document.createElement("tr")
        for (let j = 0; j < columns; j++) {
            const column = document.createElement("td")
            row.appendChild(column)
        }
        table.appendChild(row)
    }

    document.body.appendChild(table)
}

createTable(6, 5)

function createForm() {
    const form = document.createElement("form")
    const textInputs = ['Логін:', 'Пароль:', 'Повторіть пароль:']

    textInputs.forEach((textInput, index) => {
        const textInputLine = document.createElement("div")
        textInputLine.appendChild(createLabel(textInput, "input" + index))
        const input = document.createElement("input")
        input.id = "input" + index
        if (index !== 0) {
            input.setAttribute("type", "password")
        }
        textInputLine.appendChild(input)

        form.appendChild(textInputLine);
    })

    const radioInputs=['чоловік', 'жінка']
    const sexLine = createFieldContainer("Стать:")
    const sexInputs = document.createElement("div")
    radioInputs.forEach((radioInput, index) => {
        const sexSelect= document.createElement("span")
        const sexInput = document.createElement("input")
        sexInput.setAttribute("type", "radio")
        sexInput.name = "sexInput"
        sexInput.id = "sexInput" + index
        sexSelect.appendChild(sexInput)
        const labelForSexInput = createLabel(radioInput, "sexInput" + index)
        sexSelect.appendChild(labelForSexInput)
        sexInputs.appendChild(sexSelect)
    })
    sexLine.appendChild(sexInputs)
    form.appendChild(sexLine)

    const cities= ['Житомир', 'Київ', 'Львів']
    const citySelectLine = createFieldContainer("Вкажіть місто:")
    const citySelector = document.createElement("select")
    cities.forEach(city => {
        const option = new Option(city, city);
        citySelector.options.add(option)
    })
    citySelector.multiple = true
    citySelector.options[0].selected = true
    citySelectLine.appendChild(citySelector)
    form.appendChild(citySelectLine)

    const hobbies = ['футбол', 'шахи', 'малювання', 'музика'];
    const hobbiesLine = createFieldContainer("Інтереси:")
    const hobbiesCheckboxes  = document.createElement("div")
    hobbies.forEach((hobby, index) => {
        const checkboxGroup = document.createElement("span")
        const checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox")
        checkbox.id = "checkbox" + index;
        const checkboxLabel = createLabel(hobby, "checkbox" + index)
        checkboxGroup.appendChild(checkbox)
        checkboxGroup.appendChild(checkboxLabel)
        hobbiesCheckboxes.appendChild(checkboxGroup)
    })
    hobbiesLine.appendChild(hobbiesCheckboxes)
    form.appendChild(hobbiesLine)

    const formButtons = document.createElement("div")
    const resetBtn = createButton("reset", "Очистити")
    const submitBtn = createButton("submit", "Відправити")
    formButtons.appendChild(resetBtn)
    formButtons.appendChild(submitBtn)

    form.appendChild(formButtons)

    document.body.appendChild(form)
}

function createFieldContainer(title) {
    const container = document.createElement("div")
    const titleDiv = document.createElement("div")
    titleDiv.innerText = title
    container.appendChild(titleDiv)
    return container
}
function createButton(type, text) {
    const button = document.createElement("button")
    button.type = type
    button.innerText = text
    return button
}
function createLabel(text, forId) {
    const label = document.createElement("label")
    if (forId) label.setAttribute("for", forId)
    label.innerText = text
    return label
}

createForm()