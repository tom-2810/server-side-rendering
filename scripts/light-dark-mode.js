let modeSwitch = document.getElementById("mode").getElementsByTagName("input")[0];
let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    modeSwitch.checked = true;
    document.documentElement.setAttribute("data-theme", savedTheme);
}

modeSwitch.addEventListener('click', function () {
    modeSwitch.checked ? setTheme("dark") : setTheme("");
});

function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}