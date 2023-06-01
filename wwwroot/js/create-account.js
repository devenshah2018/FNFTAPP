// Fetch the content of _Layout.cshtml
fetch('/_Layout.cshtml')
    .then(response => response.text())
    .then(data => {
        // Extract the top bar HTML
        const topBarHTML = extractTopBarHTML(data);

        // Append the top bar HTML to the container
        document.getElementById('topBarContainer').innerHTML = topBarHTML;
    })
    .catch(error => {
        console.error('Error fetching _Layout.cshtml:', error);
    });

// Function to extract the top bar HTML from _Layout.cshtml content
function extractTopBarHTML(layoutHTML) {
    // Parse the layout HTML using DOM manipulation
    const parser = new DOMParser();
    const doc = parser.parseFromString(layoutHTML, 'text/html');

    // Extract the top bar HTML using DOM selection
    const topBar = doc.querySelector('.top-bar');

    // Return the HTML content of the top bar
    return topBar.innerHTML;
}


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
