document.addEventListener('scroll', () => {
    const parallax = document.querySelector('.parallax-background');
    let scrollPosition = window.pageYOffset;
    parallax.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});

// Back to Top Button
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Toggle Menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

function closeMenu() {
    const menu = document.getElementById("menu");
    menu.classList.remove("active");
}

// Close Modal
function closeModal() {
    const modal = document.querySelector(".modal-overlay");
    if (modal) modal.remove();
}

// Smooth Scroll to Section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        closeMenu(); // Close the menu after scrolling
    }
}
document.addEventListener('scroll', () => {
    const aboutSection = document.querySelector('.about-content .sliding-text');
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionPosition < screenHeight) {
        aboutSection.style.animationPlayState = 'running'; // Start the animation
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
}

function scrollToTop() {
    console.log("Back to Top button clicked!");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down: Hide the header
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up: Show the header
        header.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Avoid negative values
    let lastScrollTop = 0;
const header = document.querySelector('header');
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down: Hide header and footer
        header.style.transform = 'translateY(-100%)';
        footer.style.transform = 'translateY(100%)';
    } else {
        // Scrolling up: Show header and footer
        header.style.transform = 'translateY(0)';
        footer.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Avoid negative values
});

});

