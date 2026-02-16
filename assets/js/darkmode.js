const toggleBtn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");
const body = document.body;

// Charger le thème sauvegardé
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    icon.classList.replace("fa-sun", "fa-moon");
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        icon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("theme", "dark");
    } else {
        icon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "light");
    }
});

