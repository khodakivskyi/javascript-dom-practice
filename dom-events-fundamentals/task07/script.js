const widthSlider = document.getElementById('widthSlider');
const widthNumber = document.getElementById('widthNumber');
const heightSlider = document.getElementById('heightSlider');
const heightNumber = document.getElementById('heightNumber');
const rotateSlider = document.getElementById('rotateSlider');
const rotateNumber = document.getElementById('rotateNumber');
const block = document.querySelector('.block');

widthSlider.addEventListener('input', () => {
    widthNumber.value = widthSlider.value;
    block.style.width = widthSlider.value + 'px';
});

heightSlider.addEventListener('input', () => {
    heightNumber.value = heightSlider.value;
    block.style.height = heightSlider.value + 'px';
});

rotateSlider.addEventListener('input', () => {
    rotateNumber.value = rotateSlider.value;
    block.style.transform = `rotate(${rotateSlider.value}deg)`;
});