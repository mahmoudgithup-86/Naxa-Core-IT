javascript
// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        navigation.classList.toggle("active");

        const isOpen = navigation.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    // Close menu after clicking a link

    const navigationLinks =
        navigation.querySelectorAll("a");

    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navigation.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";

        });

    });

}


// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm && formMessage) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        // Check empty fields

        if (!name || !email || !message) {

            formMessage.textContent =
                "Please complete all fields.";

            formMessage.style.color =
                "#ff6b6b";

            return;
        }


        // Simple email validation

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formMessage.textContent =
                "Please enter a valid email address.";

            formMessage.style.color =
                "#ff6b6b";

            return;
        }


        // Success message

        formMessage.textContent =
            `Thank you, ${name}. Your message has been received.`;

        formMessage.style.color =
            "#4ade80";


        // Clear form

        contactForm.reset();

    });

}


// =========================
// CLOSE MOBILE MENU
// WHEN CLICKING OUTSIDE
// =========================

document.addEventListener("click", (event) => {

    if (!navigation || !menuToggle) {
        return;
    }

    const clickedInsideMenu =
        navigation.contains(event.target);

    const clickedButton =
        menuToggle.contains(event.target);


    if (
        !clickedInsideMenu &&
        !clickedButton &&
        navigation.classList.contains("active")
    ) {

        navigation.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.textContent = "☰";

    }

});


// =========================
// CURRENT YEAR
// =========================

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    const currentYear =
        new Date().getFullYear();

    copyright.textContent =
        `© ${currentYear} NexaCore IT. Demo project for portfolio purposes.`;

}


احفظ بـ
