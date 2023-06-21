// This function is called when the user clicks the Buy Now button.
function buyNow() {
  // Get the number of general admission tickets.
    var gaTickets = document.getElementById("ga-tickets").value;
    // Get the number of VIP tickets.
    var vipTickets = document.getElementById("vip-tickets").value;
    // Display a message indicating how many tickets the user has purchased.
    alert("You have purchased " + gaTickets + " general admission tickets and " + vipTickets + " VIP tickets.");
}

// Attach the buyNow() function to the Buy Now button.
document.getElementById("buy-now").onclick = buyNow;
