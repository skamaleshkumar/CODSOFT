// ==========================================================================
// Kamalesh Kumar - Portfolio Interactive Scripts
// ==========================================================================

// Mobile Navigation Toggle
function handlemenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    const menuIcon = document.getElementById("menuIcon");
    if (!mobileMenu) return;

    mobileMenu.classList.toggle("active");

    if (mobileMenu.classList.contains("active")) {
        menuIcon.classList.remove("bx-menu");
        menuIcon.classList.add("bx-x");
    } else {
        menuIcon.classList.remove("bx-x");
        menuIcon.classList.add("bx-menu");
    }
}

function closeMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    const menuIcon = document.getElementById("menuIcon");
    if (!mobileMenu) return;

    mobileMenu.classList.remove("active");
    if (menuIcon) {
        menuIcon.classList.remove("bx-x");
        menuIcon.classList.add("bx-menu");
    }
}

// Active Nav Link on Scroll (Scrollspy)
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute("id");
        const navLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (navLink) {
                document.querySelectorAll(".nav-menu .nav-link").forEach((link) => {
                    link.classList.remove("active");
                });
                navLink.classList.add("active");
            }
        }
    });

    // Header shadow on scroll
    const header = document.getElementById("navbar");
    if (header) {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.4)";
        } else {
            header.style.boxShadow = "none";
        }
    }
});

// Contact Form Submission Handler
function handleContactSubmit() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formStatus = document.getElementById("formStatus");

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    if (formStatus) {
        formStatus.style.display = "block";
        formStatus.className = "form-status success";
        formStatus.innerHTML = `✓ Thank you, <strong>${name}</strong>! Your message has been noted. You can also connect directly via <a href="https://wa.me/918925152676" style="color:#10b981; text-decoration:underline;">WhatsApp</a> or <a href="mailto:skamaleshkumar89251@gmail.com" style="color:#38bdf8; text-decoration:underline;">Email</a>.`;
        document.getElementById("contactForm").reset();
    }
}

// Animate Skill Progress Bars on Viewport Enter
document.addEventListener("DOMContentLoaded", () => {
    const progressFills = document.querySelectorAll(".progress-fill");
    
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.transition = "width 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)";
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        progressFills.forEach((fill) => {
            observer.observe(fill);
        });
    }
});
