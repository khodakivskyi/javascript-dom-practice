const emails = [
    "olena.kovalenko.8471@gmail.com",
    "dmytro.petrenko.5932@ukr.net",
    "iryna.sydorenko.1208@i.ua",
    "andrii.melnyk.4317@yahoo.com",
    "kateryna.bondar.7624@outlook.com",
    "serhii.honcharenko.9056@gmail.com",
    "natalia.romanenko.2183@proton.me",
    "maksym.shevchenko.6740@gmail.com",
    "yulia.kravchenko.3895@icloud.com",
    "vlad.kovalchuk.5312@gmail.com"
];

emails.forEach((email, index) => {
    const checkboxLine = document.createElement("div");
    checkboxLine.appendChild(createCheckbox(email + index, email));
    checkboxLine.appendChild(createLabel(email + index, email));
    document.body.appendChild(checkboxLine);
})

document.body.addEventListener('change', function(e){
    if(e.target.type === 'checkbox'){
        result.innerText = '';
        document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox, index, arr)=>{
            result.innerText += checkbox.value;
            if(index < arr.length - 1){
                result.innerText += '; ';
            }
        })
    }
})

function createCheckbox(id, value) {
    const checkbox = document.createElement('input');
    checkbox.id = id;
    checkbox.type = 'checkbox';
    checkbox.value = value;
    return checkbox;
}

function createLabel(forId, text) {
    const label = document.createElement('label');
    label.htmlFor = forId;
    label.innerText = text;
    return label;
}

const result = document.createElement('div');
result.classList.add('result');
document.body.appendChild(result);