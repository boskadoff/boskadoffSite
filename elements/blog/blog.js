document.addEventListener("DOMContentLoaded", function() {
    const colors = ['#fffff', 'green', 'cyan', 'yellow', 'orange'];
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        card.style.backgroundColor = randomColor;
    });
});
