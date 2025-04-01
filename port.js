document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");
    const projects = document.querySelectorAll(".project");

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Hover effect for projects
    projects.forEach(project => {
        project.addEventListener("mouseover", () => {
            project.style.transform = "scale(1.1)";
            project.style.transition = "transform 0.3s ease-in-out";
        });

        project.addEventListener("mouseout", () => {
            project.style.transform = "scale(1)";
        });
    });

    // Button click animation
    const btn = document.querySelector(".btn");
    btn.addEventListener("click", () => {
        btn.classList.add("clicked");
        setTimeout(() => {
            btn.classList.remove("clicked");
        }, 300);
    });
});
