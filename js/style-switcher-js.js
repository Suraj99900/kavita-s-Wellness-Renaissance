// ======================= toggler style switcher
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.toggle("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// ======================== teme colors
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActivityStyle(color) {
    alternateStyle.forEach((style) => {
        if (color == style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }
    });
    sessionStorage.setItem('theme-text-color', color);
}

// ================= theme light and dark mode

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");

    // Store theme preference in sessionStorage
    const isDarkMode = document.body.classList.contains("dark");
    sessionStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

});

window.addEventListener("load", () => {
    // Retrieve theme preference from sessionStorage
    const savedTheme = sessionStorage.getItem('theme');

    if (savedTheme === 'dark') {
        dayNight.querySelector("i").classList.add("fa-sun");
        document.body.classList.toggle("dark");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }

    if(sessionStorage.getItem('theme-text-color') != ''){
        const alternateStyle = document.querySelectorAll(".alternate-style");
        alternateStyle.forEach((style) => {
            if (sessionStorage.getItem('theme-text-color') == style.getAttribute("title")) {
                style.removeAttribute("disabled");
            }
            else {
                style.setAttribute("disabled", "true");
            }
        });
    }
});