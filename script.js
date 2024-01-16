document.addEventListener("DOMContentLoaded", function () {
    const generateBtn = document.getElementById("generateBtn");
    const emailElement = document.getElementById("email");

    function generateRandomEmail() {
        const randomString = Math.random().toString(36).substring(2, 12); // Generates a random string
        const randomEmail = `user_${randomString}@example.com`;

        emailElement.textContent = randomEmail;
    }

    generateBtn.addEventListener("click", generateRandomEmail);

    // Initial email generation
    generateRandomEmail();
});