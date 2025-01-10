// Display a Welcome Message Based on Time
const welcomeMessage = document.getElementById("welcome-message");
const hours = new Date().getHours();
if (hours < 12) {
    welcomeMessage.textContent = "Good Morning! Welcome to this amazing webpage!";
} else if (hours < 18) {
    welcomeMessage.textContent = "Good Afternoon! Hope you're having a great day!";
} else {
    welcomeMessage.textContent = "Good Evening! Relax and enjoy browsing!";
}

// Reveal Hidden Message
document.getElementById("reveal-button").addEventListener("click", () => {
    const hiddenMessage = document.getElementById("hidden-message");
    hiddenMessage.style.display = hiddenMessage.style.display === "none" ? "block" : "none";
});

// Toggle Dark Mode
document.getElementById("toggle-dark-mode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Dark Mode Styles
const darkModeStyles = `
    body.dark-mode {
        background: #121212;
        color: #ffffff;
    }
    body.dark-mode section {
        background: #1e1e1e;
        box-shadow: 0 8px 15px rgba(255, 255, 255, 0.1);
    }
`;
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = darkModeStyles;
document.head.appendChild(styleSheet);

// Countdown Timer
const countdownTimer = document.getElementById("countdown-timer");
const countdownDate = new Date("2024-12-31T23:59:59").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdownTimer.textContent = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        countdownTimer.textContent = "🎉 Happy New Year! 🎉";
    }
}, 1000);

// Form Validation
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const formMessage = document.getElementById("form-message");

    if (!name || !email) {
        formMessage.textContent = "Please fill out all fields.";
    } else {
        formMessage.textContent = "Thank you for your submission!";
        formMessage.style.color = "green";
    }
});

