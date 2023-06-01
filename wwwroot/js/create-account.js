document.addEventListener('DOMContentLoaded', function () {
    var headElement = document.head;
    if (headElement) {
        var linkElement = document.createElement('link');
        linkElement.href = "//fonts.googleapis.com/css?family=Open+Sans:300,400,600";
        linkElement.rel = "stylesheet";
        linkElement.type = "text/css";
        headElement.appendChild(linkElement);
    }

    var inputElements = document.querySelectorAll('input');
    inputElements.forEach(function (input) {
        input.addEventListener('focus', function (event) {
            var parentElement = this.closest('.float-label-field');
            if (parentElement) {
                parentElement.classList.add('float', 'focus');
            }
        });

        input.addEventListener('blur', function () {
            var parentElement = this.closest('.float-label-field');
            if (parentElement) {
                parentElement.classList.remove('focus');
                if (!this.value) {
                    parentElement.classList.remove('float');
                }
            }
        });
    });
});
