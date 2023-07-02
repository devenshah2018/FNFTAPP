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




function signup() {
    theName = document.getElementById("txtName").value;
    theEmail = document.getElementById("txtEmail").value;
    theWalletAddress = document.getElementById("txtWallet").value;
    thePassword = document.getElementById("txtPassword").value;

    // Aggregate database
    const data = {
        name: theName,
        email: theEmail,
        wallet_address: theWalletAddress,
        password: thePassword
    };

    fetch('/api/Data/addUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                console.log('Record inserted successfully.');
            } else {
                console.log('Failed to insert record.');
            }
        });
    

}