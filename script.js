// Greeting based on time of day
function displayGreeting() {
    const hour = new Date().getHours();
    let greeting = "Good evening!";
    if (hour < 12) greeting = "Good morning!";
    else if (hour < 18) greeting = "Good afternoon!";
    alert(greeting);
}

// Toggle additional bio information
function toggleBio() {
    const extraBio = document.getElementById("extraBio");
    if (extraBio.style.display === "none") {
        extraBio.style.display = "block";
    } else {
        extraBio.style.display = "none";
    }
}

// Form validation
document.getElementById("newsletterForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (!name || !email) {
        formMessage.style.display = "block";
        formMessage.textContent = "Both fields are required!";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formMessage.style.display = "block";
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    formMessage.style.display = "none";
    alert("Thank you for subscribing!");
    document.getElementById("newsletterForm").reset();
});
