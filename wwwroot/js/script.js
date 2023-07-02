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




