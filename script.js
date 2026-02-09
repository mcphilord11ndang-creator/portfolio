// Scroll to contact section
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}


// Reveal animation on scroll
window.addEventListener("scroll", () => {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});
