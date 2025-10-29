const container = document.createElement("div");
container.classList.add("container");

const button = document.createElement("button");
button.innerText = "Click me";

const step = 30;

document.addEventListener('mousemove', (e) => {
    const buttonRect = button.getBoundingClientRect();

    const buttonX = buttonRect.left + buttonRect.width / 2;
    const buttonY = buttonRect.top + buttonRect.height / 2;

    const dx = buttonX - e.clientX;
    const dy = buttonY - e.clientY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 50) {
        const moveX = (dx / distance) * step;
        const moveY = (dy / distance) * step;

        let newLeft = button.offsetLeft + moveX;
        let newTop = button.offsetTop + moveY;

        newLeft = Math.max(0, Math.min(container.clientWidth - button.offsetWidth, newLeft));
        newTop = Math.max(0, Math.min(container.clientHeight - button.offsetHeight, newTop));

        const isInCorner =
            (newLeft <= 5 && newTop <= 5) ||
            (newLeft <= 5 && newTop >= container.clientHeight - button.offsetHeight - 5) ||
            (newLeft >= container.clientWidth - button.offsetWidth - 5 && newTop <= 5) ||
            (newLeft >= container.clientWidth - button.offsetWidth - 5 && newTop >= container.clientHeight - button.offsetHeight - 5);

        if (isInCorner) {
            newLeft = (container.clientWidth - button.offsetWidth) / 2;
            newTop = (container.clientHeight - button.offsetHeight) / 2;
        }

        button.style.left = newLeft + 'px';
        button.style.top = newTop + 'px';
    }
})

container.appendChild(button);
document.body.appendChild(container);