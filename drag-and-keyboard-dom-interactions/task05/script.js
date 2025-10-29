const track = document.querySelector('.track');
const slider = document.querySelector('.slider');

let isDragging = false;
let offsetX = 0;

slider.addEventListener('mousedown', e => {
    isDragging = true;
    const rect = slider.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    slider.style.cursor = 'grabbing';
})

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const trackRect = track.getBoundingClientRect();
    let x = e.clientX - trackRect.left - offsetX;
    x = Math.max(0, Math.min(x, track.clientWidth - slider.offsetWidth));
    slider.style.left = x + 'px';
})

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        slider.style.cursor = 'grab';
    }
});
