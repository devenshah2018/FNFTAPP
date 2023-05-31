const scrollContainer = document.querySelector('.scroll-container');
const scrollContent = document.querySelector('.scroll-content');
const scrollButtons = document.querySelectorAll('.scroll-button');

scrollButtons.forEach(button => {
    button.addEventListener('click', () => {
        const scrollAmount = button.classList.contains('left') ? -200 : 200;
        scrollContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});
