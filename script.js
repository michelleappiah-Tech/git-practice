// Simple script to show interaction on the page

document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded successfully!");

    const button = document.getElementById("actionBtn");
    const message = document.getElementById("message");

    if (button) {
        button.addEventListener("click", () => {
            message.textContent = "You clicked the button!";
        });
    }
});

