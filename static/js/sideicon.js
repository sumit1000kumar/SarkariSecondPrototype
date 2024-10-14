function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
        document.getElementById("whatsappButton").style.display = "block"; // Show WhatsApp button
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
        document.getElementById("whatsappButton").style.display = "none"; // Hide WhatsApp button
    }
}