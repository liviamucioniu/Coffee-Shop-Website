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

const productsListElement = document.getElementById("product-list");

products.forEach((product) => {
    const productCardElement = document.createElement("div");
    productCardElement.classList.add("product-card");

    productCardElement.appendChild(
        createProductImage(product.image, product.name)
    );

    productCardElement.appendChild(createProductName(product.name));
    productCardElement.appendChild(
        createProductDescription(product.description)
    );

    productsListElement.appendChild(productCardElement);
});

//functiile de create img, h3, si p
function createProductImage(src, alt) {
    const productImage = document.createElement("img");
    productImage.classList.add("product-image");
    productImage.setAttribute("src", src);
    productImage.setAttribute("alt", alt);

    return productImage;
}

function createProductName(name) {
    const productName = document.createElement("h3");
    productName.classList.add("product-name");
    productName.innerText = name;

    return productName;
}

function createProductDescription(description) {
    const productDescription = document.createElement("p");
    productDescription.classList.add("product-description");
    productDescription.innerText = description;

    return productDescription;
}
