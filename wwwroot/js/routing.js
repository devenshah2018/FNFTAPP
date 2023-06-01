

function redirectToEvent(imageID) {
    var url = "/templates/event-template.html" + "?artist=" + encodeURIComponent(imageID);

    window.location.href = url;

}
