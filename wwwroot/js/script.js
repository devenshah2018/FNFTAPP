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

function filterImages() {
    var searchInput = document.querySelector('.search-input');
    var inputValue = searchInput.value.toLowerCase();
    var imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(function (container) {
        var containerClass = container.classList[1];
        if (containerClass.includes(inputValue)) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    });
}
