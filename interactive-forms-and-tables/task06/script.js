const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    let isFlipped = false;

    card.addEventListener('click', function() {
        if (card.classList.contains('flipping')) {
        }

        if (!isFlipped) {
            card.classList.add('flipped');
            isFlipped = true;

        } else {
            card.classList.remove('flipped');
            isFlipped = false;
        }
    });
});