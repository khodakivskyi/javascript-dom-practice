const buttons = document.querySelectorAll('button');
const images = document.querySelectorAll('section img');
let index = 0;

images[index].classList.add('active');
buttons.forEach(button => {
    button.addEventListener('click', function(){
        images[index].classList.remove('active');
        if(button.classList.contains('next')){
            index++;
            if(images.length <= index) index = 0;
        }
        else if(button.classList.contains('prev')){
            index--;
            if (index < 0) index = images.length - 1;
        }
        images[index].classList.add('active');
    });
});
