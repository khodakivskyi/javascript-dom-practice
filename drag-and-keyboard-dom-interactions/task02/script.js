const colors = [
    "red", "blue", "green", "yellow", "orange",
    "purple", "pink", "cyan", "magenta", "lime",
    "teal", "brown", "violet", "indigo", "gold",
    "salmon", "coral", "turquoise", "khaki", "maroon"
];
const circles = [];
const step = 10;
let size = 10;
let currentIndex = 0;

colors.forEach((color, i) => {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.background = color;
    circle.style.width = size + 'px';
    circle.style.height = size + 'px';

    const maxX = window.innerWidth - size;
    const maxY = window.innerHeight - size;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    size++;

    circle.style.left = randomX + 'px';
    circle.style.top = randomY + 'px';

    circles.push(circle);
    circles[currentIndex].classList.add('active');
    document.body.appendChild(circle);
})

document.body.addEventListener('keydown', (e) => {
    const activeCircle = circles[currentIndex];
    if (!activeCircle) return;
    let left = activeCircle.offsetLeft;
    let top = activeCircle.offsetTop;

    switch (e.key) {
        case 'Tab':
            e.preventDefault();

            if(e.shiftKey) {
                circles[currentIndex].classList.remove('active');
                currentIndex = (currentIndex - 1 + circles.length) % circles.length;
                circles[currentIndex].classList.add('active');
            }
            else{
                circles[currentIndex].classList.remove("active");
                currentIndex = (currentIndex + 1) % circles.length;
                circles[currentIndex].classList.add("active");
            }
            break;

        case 'ArrowUp':
            top = Math.max(0, top - step);
            activeCircle.style.top = top + 'px';
            break;
        case 'ArrowDown':
            top = Math.min(window.innerHeight - activeCircle.offsetHeight, top + step);
            activeCircle.style.top = top + 'px';
            break;
        case 'ArrowLeft':
            left = Math.max(0, left - step);
            activeCircle.style.left = left + 'px';
            break;
        case 'ArrowRight':
            left = Math.min(window.innerWidth - activeCircle.offsetWidth, left + step);
            activeCircle.style.left = left + 'px';
            break;
    }
})
