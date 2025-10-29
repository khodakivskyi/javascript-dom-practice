const mainBlock = document.createElement('div');
mainBlock.classList.add('container');

for (let i = 0; i < 12; i++) {
    const img = document.createElement('img');
    img.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDtXrXKwBiC0ZvbQ3uJ0l185AAVVonNTfLtQ&s`;
    img.alt='cat';
    img.classList.add('non-active');

    img.addEventListener('click', () => {
        img.classList.toggle('active');
        img.classList.toggle('non-active');
    });

    mainBlock.appendChild(img);
}

document.body.appendChild(mainBlock);