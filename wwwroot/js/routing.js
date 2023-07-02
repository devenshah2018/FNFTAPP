

function redirectToEvent(imageID) {
    var url = "/templates/event-template.html" + "?artist=" + encodeURIComponent(imageID);
    window.location.href = url;
}

function redirectToCreateUser() {
    window.location.href = "/accounts/create-user.html";
}

function redirectToCreateEvent()
{
    window.location.href = "/artist/create-event.html"
}

