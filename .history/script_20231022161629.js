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

const products = [
    {
        name: "CofeeBean - Coffe 1 0.25l",
        description:
            "Lorem ipsum dolor etur, adipisicing elquasquas molestiae aliquid quia, dolorem necessitatibus!",
        image: "./assets/images/coffee-1.png",
    },
    {
        name: "CofeeBean - Coffe 2 0.25l",
        description:
            "Lorem ipsum dolor etur, adipisicing elquasquas molestiae aliquid quia, dolorem necessitatibus!",
        image: "./assets/images/coffee-2.png",
    },

    {
        name: "CofeeBean - Coffe 3 0.25l",
        description:
            "Lorem ipsum dolor etur, adipisicing elquasquas molestiae aliquid quia, dolorem necessitatibus!",
        image: "./assets/images/coffee-3.png",
    },

    {
        name: "CofeeBean - Coffe 4 0.25l",
        description:
            "Lorem ipsum dolor etur, adipisicing elquasquas molestiae aliquid quia, dolorem necessitatibus!",
        image: "./assets/images/coffee-4.png",
    },

    {
        name: "CofeeBean - Coffe 5 0.25l",
        description:
            "Lorem ipsum dolor etur, adipisicing elquasquas molestiae aliquid quia, dolorem necessitatibus!",
        image: "./assets/images/coffee-5.png",
    },

    {
        name: "CofeeBean - Coffe 6 0.25l",
        description:
            "Lorem ipsum dolor etur, adipisicing elquasquas molestiae aliquid quia, dolorem necessitatibus!",
        image: "./assets/images/coffee-6.png",
    },

    {
        name: "CofeeBean - Coffe Pack 1 0.5kg",
        description:
            "Lorem ipsum dolor etur, adipisicing elquasquas molestiae aliquid quia, dolorem necessitatibus!",
        image: "./assets/images/coffee-pack-1.png",
    },

    {
        name: "CofeeBean - Coffe Pack 2 0.5kg",
        description:
            "Lorem ipsum dolor etur, adipisicing elquasquas molestiae aliquid quia, dolorem necessitatibus!",
        image: "./assets/images/coffee-pack-2.png",
    },

    {
        name: "CofeeBean - Coffe Pack 3 0.5kg",
        description:
            "Lorem ipsum dolor etur, adipisicing elquasquas molestiae aliquid quia, dolorem necessitatibus!",
        image: "./assets/images/coffee-pack-3.png",
    },
];
