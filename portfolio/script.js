
// Project buttons
function showProject(projectName) {
    alert(projectName + " project selected!");
}

// Contact form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    const subject = encodeURIComponent("Portfolio message from " + name);
    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\nMessage: " + message
    );

    const recipient = "YOUR_EMAIL@example.com";

    window.location.href =
        "mailto:" + recipient +
        "?subject=" + subject +
        "&body=" + body;
});

// Footer year
document.getElementById("year").textContent =
    new Date().getFullYear();
