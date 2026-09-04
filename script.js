// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("open");

});


// Close menu after clicking a link

document.querySelectorAll(".nav-menu a").forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("open");

    });

});


// ================= DARK MODE =================

const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        darkMode.textContent = "☀️";

        localStorage.setItem("darkMode", "enabled");

    } else {

        darkMode.textContent = "🌙";

        localStorage.setItem("darkMode", "disabled");

    }

});


// Remember dark mode

if (localStorage.getItem("darkMode") === "enabled") {

    document.body.classList.add("dark");

    darkMode.textContent = "☀️";

}


// ================= YEAR =================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ================= CONTACT FORM =================

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const formMessage =
        document.getElementById("formMessage");

    formMessage.textContent =
        "Thank you, " + name +
        "! Your message has been received.";

    contactForm.reset();

});
