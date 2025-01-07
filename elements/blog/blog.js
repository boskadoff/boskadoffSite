document.addEventListener("DOMContentLoaded", function() {
    const colors = ['#ffb6a3', '#f5d1c3', '#aab8bb', '#5f9595', '#f0bc68'];
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        card.style.backgroundColor = randomColor;
    });
});
