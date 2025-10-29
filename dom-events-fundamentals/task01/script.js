const checkboxes=['Ukranian', 'English', 'Spanish'];
const values=['uk', 'en', 'sp'];
checkboxes.forEach((checkbox, index)=>{
    const checkboxLine= document.createElement("div");
    checkboxLine.appendChild(createCheckbox(checkbox+index,values[index]));
    checkboxLine.appendChild(createLabel(checkbox+index,checkbox));
    document.body.appendChild(checkboxLine);
})

function createCheckbox(id, value){
    const checkbox = document.createElement('input');
    checkbox.id = id;
    checkbox.type = 'checkbox';
    checkbox.value = value;
    return checkbox;
}

function createLabel(forId,text){
    const label = document.createElement('label');
    label.htmlFor = forId;
    label.innerText = text;
    return label;
}

const result = document.createElement('div');
result.classList.add('result');
document.body.appendChild(result);

const resBtn = document.createElement('button');
resBtn.innerText = 'OK';
document.body.appendChild(resBtn);

resBtn.addEventListener('click', function(){
    result.innerText = '';
    document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox, index, arr)=>{
        result.innerText += checkbox.value;
        if(index < arr.length - 1){
            result.innerText += ', ';
        }
    })
})