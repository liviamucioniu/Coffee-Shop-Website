const cartCounterElement = document.getElementById("cart-counter");
const wishlistCounterElement = document.getElementById("wishlist-counter");
const cart = [];
const wish = [];

const products = [
    {
        id: 1,
        name: "CofeeBean - Coffe 1 0.25l",
        description:
            "Lorem ipsum dolor etur, adipisicing elquasquas molestiae aliquid quia, dolorem necessitatibus!",
        image: "./assets/images/coffee-1.png",
    },
    {
        id: 2,
        name: "CofeeBean - Coffe 2 0.25l",
        description:
            "Lorem ipsum dolor etur, adipisicing elquasquas molestiae aliquid quia, dolorem necessitatibus!",
        image: "./assets/images/coffee-2.png",
    },

    {
        id: 3,
        name: "CofeeBean - Coffe 3 0.25l",
        description:
            "Lorem ipsum dolor etur, adipisicing elquasquas molestiae aliquid quia, dolorem necessitatibus!",
        image: "./assets/images/coffee-3.png",
    },

    {
        id: 4,
        name: "CofeeBean - Coffe 4 0.25l",
        description:
            "Lorem ipsum dolor etur, adipisicing elquasquas molestiae aliquid quia, dolorem necessitatibus!",
        image: "./assets/images/coffee-4.png",
    },

    {
        id: 5,
        name: "CofeeBean - Coffe 5 0.25l",
        description:
            "Lorem ipsum dolor etur, adipisicing elquasquas molestiae aliquid quia, dolorem necessitatibus!",
        image: "./assets/images/coffee-5.png",
    },

    {
        id: 6,
        name: "CofeeBean - Coffe 6 0.25l",
        description:
            "Lorem ipsum dolor etur, adipisicing elquasquas molestiae aliquid quia, dolorem necessitatibus!",
        image: "./assets/images/coffee-6.png",
    },

    {
        id: 7,
        name: "CofeeBean - Coffe Pack 1 0.5kg",
        description:
            "Lorem ipsum dolor etur, adipisicing elquasquas molestiae aliquid quia, dolorem necessitatibus!",
        image: "./assets/images/coffee-pack-1.png",
    },

    {
        id: 8,
        name: "CofeeBean - Coffe Pack 2 0.5kg",
        description:
            "Lorem ipsum dolor etur, adipisicing elquasquas molestiae aliquid quia, dolorem necessitatibus!",
        image: "./assets/images/coffee-pack-2.png",
    },

    {
        id: 9,
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

    productCardElement.appendChild(createProductAddToCartButton(product.id));

    productCardElement.appendChild(createWishlistButton(product.id));

    productsListElement.appendChild(productCardElement);
});

//******** Functiile de create img, h3, si p *************

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

// ******** Butonul de adaugare in cos ***********

function createProductAddToCartButton(productId) {
    const productAddtoCartButton = document.createElement("a");
    productAddtoCartButton.classList.add("product-add-to-cart-button");
    productAddtoCartButton.innerHTML =
        " <i class='fa-solid fa-shopping-basket'></i> Add to cart";

    productAddtoCartButton.addEventListener("click", () => {
        addProductoCart(productId);
    });

    return productAddtoCartButton;
}

function addProductoCart(productId) {
    const productDetails = getProductDetails(productId);

    if (cart.some((product) => product.id === productId)) {
        cart.forEach((product) => {
            if (product.id === productId) {
                product.quantity++;
            }
        });
    } else {
        cart.push({
            id: productId,
            name: productDetails.name,
            quantity: 1,
        });
    }

    updateCardCounter();
    console.log(cart);
}

function getProductDetails(productId) {
    for (let product of products) {
        if (product.id === productId) {
            return product;
        }
    }
}

function updateCardCounter() {
    cartCounterElement.innerText = cart.length;
}

// ******** Butonul de Wishlist ***********

function createWishlistButton(productId) {
    const wishlistButton = document.createElement("a");
    wishlistButton.classList.add("wishlist-button");
    wishlistButton.innerHTML = '<i class="fa-regular fa-heart"></i>';

    wishlistButton.addEventListener("click", () => {
        addProductToWishlist(productId);
    });

    wishlistButton.addEventListener("mousedown", () => {
        wishlistButton.classList.add("active");
        isActive = true;
    });

    wishlistButton.addEventListener("mouseup", () => {
        wishlistButton.classList.remove("active");
        isActive = false;
    });

    return wishlistButton;
}

function addProductToWishlist(productId) {
    const productDetails = getProductDetails(productId);

    if (wish.some((product) => product.id === productId)) {
        wish.forEach((product) => {
            if (product.id === productId) {
                product.quantity++;
            }
        });
    } else {
        wish.push({
            id: productId,
            name: productDetails.name,
            quantity: 1,
        });
    }

    updateWishlistCounter();
}

function updateWishlistCounter() {
    wishlistCounterElement.innerText = wish.length;
}
