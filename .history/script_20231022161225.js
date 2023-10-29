const toggleMobileMenuButton = document.getElementById("toggle-mobile-menu");
const toggleMobileMenuButtonIcon = toggleMobileMenuButton.children[0];

const menuElement = document.getElementById("menu");

toggleMobileMenuButton.addEventListener("click", () => {
    //cand meniu e inchis sa apara fa-bars
    //cand meniu e deschis sa apara fa-xmark
    menuElement.classList.toggle("mobile-open");

    if (menuElement.classList.contains("mobile-open")) {
        toggleMobileMenuButtonIcon.classList.remove("fa-bars");
        toggleMobileMenuButtonIcon.classList.add("fa-xmark");
    } else {
        toggleMobileMenuButtonIcon.classList.remove("fa-xmark");
        toggleMobileMenuButtonIcon.classList.add("fa-bars");
    }
});

const products = [{ 
    name: "CofeeBean - Coffe 1 0.25l",
    description : 
 }];
