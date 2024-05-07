// Function to handle click on language menu items
function handleLanguageSelection() {
    var menuItems = document.querySelectorAll(".menu > li");

    // Add click event listener to each menu item
    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            var selected = item.querySelector('.lang-code').innerHTML.toUpperCase();
            console.log(selected);
            document.getElementById("language-selected").innerHTML = selected;
            document.querySelector(".menu").classList.remove("showMenu");
        });
    });
}

// Function to handle mouse leave event on dropdown wrapper
function handleMouseLeave() {
    document.getElementById("dropdown-wrapper").addEventListener('mouseleave', function () {
        document.querySelector(".menu").classList.remove("showMenu");
    });
}

// Function to set the initially selected language
function setInitialLanguage() {
    var selectedMenuItem = document.querySelector(".menu li.selected");
    if (selectedMenuItem) {
        var selectedLanguage = selectedMenuItem.querySelector('.lang-code').innerHTML.toUpperCase();
        console.log(selectedLanguage);
        document.getElementById("language-selected").innerHTML = selectedLanguage;
    }
}

// Function to toggle language menu visibility
function toggleMenu() {
    document.querySelector(".menu").classList.toggle("showMenu");
}

// Add click event listener to dropdown box
document.querySelector(".dropdownbox").addEventListener('click', function () {
    toggleMenu();
    handleLanguageSelection();
});

// Set initial language on page load
window.onload = function () {
    setInitialLanguage();
    handleMouseLeave();
};
