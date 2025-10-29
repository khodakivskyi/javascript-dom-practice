const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

const colors = ["blue", "darkblue", "green", "yellow"];
const sizes = [100, 50, 80, 140];
const blocks = [];
colors.forEach((color, i) => {
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.background = color;
    block.style.width = sizes[i] + 'px';
    block.style.height = sizes[i] + 'px';

    const maxX = container.clientWidth - sizes[i];
    const maxY = container.clientHeight - sizes[i];
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    block.style.left = randomX + 'px';
    block.style.top = randomY + 'px';

    blocks.push(block);
    container.appendChild(block);
})

let activeBlock = null;
let offsetX = 0;
let offsetY = 0;

container.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('block')) {
        activeBlock = e.target;

        const rect = activeBlock.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        activeBlock.style.cursor = 'grabbing';
    }
})

container.addEventListener('mousemove', (e) => {
    if (!activeBlock) return;

    const containerRect = container.getBoundingClientRect();

    let x = e.clientX - containerRect.left - offsetX;
    let y = e.clientY - containerRect.top - offsetY;

    x = Math.max(0, Math.min(x, container.clientWidth - activeBlock.offsetWidth));
    y = Math.max(0, Math.min(y, container.clientHeight - activeBlock.offsetHeight));

    activeBlock.style.left = x + 'px';
    activeBlock.style.top = y + 'px';
})

container.addEventListener('mouseup', () => {
    if (activeBlock) activeBlock.style.cursor = 'grab';
    activeBlock = null;
});

container.addEventListener('mouseleave', () => {
    activeBlock = null;
});