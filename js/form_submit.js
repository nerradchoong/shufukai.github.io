class FormHandler {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.setupFormSubmission();
    }

    setupFormSubmission() {
        this.form.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent default form submission behavior

            const name = document.getElementById("name-7").value;
            const email = document.getElementById("email-9").value;
            const message = document.getElementById("field-4").value;

            // Simple validation
            if (!name || !email || !message) {
                alert("Please fill out all fields.");
                return;
            }

            // Send the email using SMTP.js
            this.sendEmail(name, email, message);
        });
    }

    sendEmail(name, email, message) {
        Email.send({
            SecureToken: "C973D7AD-F097-4B95-91F4-40ABC5567812", // Replace with your SMTP secure token
            To: 'nerradchoong@gmail.com',
            From: email,
            Subject: `New Message from Shufukai website - ${name}`,
            Body: `Name: ${name}<br>Email: ${email}<br><br>Message:<br>${message}`
        })
        .then((response) => {
            if (response === 'OK') {
                alert("Your message has been sent successfully!");
                this.form.reset(); // Reset form fields after submission
            } else {
                alert("Oops! Something went wrong. Please try again.");
            }
        });
    }
}

// Initialize form handler after the page loads
document.addEventListener('DOMContentLoaded', () => {
    new FormHandler('email-form'); // Use your form ID here
});
