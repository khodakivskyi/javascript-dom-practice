const img = document.querySelector('img');
const button = document.querySelector('button');

button.addEventListener('click', function(){
    img.classList.toggle('big');
    img.classList.toggle('small');
});