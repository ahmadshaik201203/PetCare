
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Mobile navigation
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuToggle.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Learn more button interaction
const learnButton = document.querySelector(".learn-btn");

learnButton.addEventListener("click", () => {
    document.querySelector("#process").scrollIntoView({
        behavior: "smooth"
    });
});

// Simple pet card interaction
document.querySelectorAll(".pet-card").forEach(card => {
    card.addEventListener("click", () => {
        const petName = card.querySelector("h3").textContent;
        alert(`You selected ${petName}! Pet details will be available soon.`);
    });
});

// Contact button
document.querySelector(".contact-btn").addEventListener("click", () => {
    console.log("Contact Heaven Society");
});

// Current year
document.querySelector(".footer span").textContent =
    `© ${new Date().getFullYear()} Heaven Society. All rights reserved.`;
