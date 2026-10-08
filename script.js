/* =========================================
MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    ```
menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const isOpen = navbar.classList.contains("active");

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});


const navLinks = navbar.querySelectorAll("a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});
```

}

/* =========================================
CONTACT FORM
========================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {

    ```
contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document
        .getElementById("name")
        .value
        .trim();

    const email = document
        .getElementById("email")
        .value
        .trim();

    const message = document
        .getElementById("message")
        .value
        .trim();


    if (!name || !email || !message) {

        formMessage.textContent =
            "Please complete all fields.";

        formMessage.style.color = "#fca5a5";

        return;
    }


    formMessage.textContent =
        `Thank you, ${ name }. Your message has been received.`;

    formMessage.style.color = "#86efac";


    contactForm.reset();

});
```

}

/* =========================================
SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-card, .service-card, .feature, .project-card, .testimonial, .contact-box"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        ```
    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("reveal-visible");

            revealObserver.unobserve(entry.target);

        }

    });

},
{
    threshold: 0.12
}
```

);

revealElements.forEach((element) => {

    ```
element.classList.add("reveal");

revealObserver.observe(element);
```

});

/* =========================================
CURRENT YEAR
========================================= */

const copyright = document.querySelector(".copyright");

if (copyright) {

    ```
const currentYear = new Date().getFullYear();

copyright.textContent =
    `© ${ currentYear } NexaCore IT.Demo project for portfolio purposes.`;
```

}
