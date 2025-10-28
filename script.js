document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.getElementById("themeToggle");

    // Load saved theme
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "false") {
        document.body.classList.add("light-mode");
        themeToggleBtn.textContent = "🌙";
    } else {
        themeToggleBtn.textContent = "🔆";
    }

    // Toggle theme
    themeToggleBtn.addEventListener("click", () => {
        const isLight = document.body.classList.toggle("light-mode");
        localStorage.setItem("darkMode", !isLight);
        themeToggleBtn.textContent = isLight ? "🌙" : "🔆";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.querySelector(".sidebar");
    const body = document.body;

    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("show");
        body.classList.toggle("menu-open");
    });

    // Optional: close sidebar clicking outside
    body.addEventListener("click", (e) => {
        if (
            !sidebar.contains(e.target) &&
            !menuToggle.contains(e.target) &&
            sidebar.classList.contains("show")
        ) {
            sidebar.classList.remove("show");
            body.classList.remove("menu-open");
        }
    });
});