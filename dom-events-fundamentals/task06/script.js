document.querySelector('.form').addEventListener('focusin', (e) => {
    if (e.target.classList.contains('input')) {
        e.target.parentElement.classList.add('focus');
    }
})

document.querySelector('.form').addEventListener('focusout', (e) => {
    if (e.target.classList.contains('input')) {
        e.target.parentElement.classList.remove('focus');
    }
})