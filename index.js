/*const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 1499,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },
    {
        id: 2,
        name: "Smart Watch",
        category: "Electronics",
        price: 2499,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },
    {
        id: 3,
        name: "Men T-Shirt",
        category: "Fashion",
        price: 599,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
    },
    {
        id: 4,
        name: "Running Shoes",
        category: "Shoes",
        price: 1999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },
    {
        id: 5,
        name: "Stylish Backpack",
        category: "Accessories",
        price: 999,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
    },
    {
        id: 6,
        name: "Digital Camera",
        category: "Electronics",
        price: 5999,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
    },
    {
        id: 7,
        name: "Men Jacket",
        category: "Fashion",
        price: 1799,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500"
    },
    {
        id: 8,
        name: "Sports Shoes",
        category: "Shoes",
        price: 2299,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    }
*/

// Display Products
function displayProducts(list) {

    const grid = document.getElementById("productGrid");

    if (!grid) return;

    grid.innerHTML = list.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">
                <h3>${product.name}</h3>
                <p>₹${product.price.toLocaleString("en-IN")}</p>

                <button class="add-btn"
                    onclick="addToCart(${product.id})">
                    Add To Cart 🛒
                </button>
            </div>
        </div>
    `).join("");
}

// Category Filter
function filterCategory(category) {

    if (category === "All") {
        displayProducts(products);
    } else {
        const filtered = products.filter(product =>
            product.category === category
        );

        displayProducts(filtered);
    }
}

// Add To Cart
function addToCart(id) {

    let cart = JSON.parse(
        localStorage.getItem("shopCart")
    ) || [];

    const product = products.find(item => item.id === id);

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    localStorage.setItem("shopCart", JSON.stringify(cart));

    alert(product.name + " added to your cart!");
}

// Contact Form
//const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

        document.getElementById("formMessage").innerText =
            "Thank you " + name + "! Your message has been received.";

        contactForm.reset();

    });
}

const cartCount = document.getElementById("cartCount");

if (cartCount) {
    // Update cart count display
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem("shopCart")) || [];
        cartCount.innerText = cart.reduce((total, item) => total + item.quantity, 0);
    }

    updateCartCount();
}
 let CartCount = document.getElementById("cartCount");

if (cartCount) {
    // Update cart count display
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem("shopCart")) || [];
        cartCount.innerText = cart.reduce((total, item) => total + item.quantity, 0);
    }
}





const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 1499,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },
    {
        id: 2,
        name: "Smart Watch",
        category: "Electronics",
        price: 2499,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },
    {
        id: 3,
        name: "Men T-Shirt",
        category: "Fashion",
        price: 599,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
    },
    {
        id: 4,
        name: "Running Shoes",
        category: "Shoes",
        price: 1999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },
    {
        id: 5,
        name: "Stylish Backpack",
        category: "Accessories",
        price: 999,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
    },
    {
        id: 6,
        name: "Digital Camera",
        category: "Electronics",
        price: 5999,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
    },
    {
        id: 7,
        name: "Men Jacket",
        category: "Fashion",
        price: 1799,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500"
    },
    {
        id: 8,
        name: "Sports Shoes",
        category: "Shoes",
        price: 2299,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    }
];

// Display Products
function displayProducts(list) {
    const grid = document.getElementById("productGrid");

    if (!grid) return;

    grid.innerHTML = list.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">
                <h3>${product.name}</h3>
                <p>₹${product.price.toLocaleString("en-IN")}</p>

                <button class="add-btn"
                    onclick="addToCart(${product.id})">
                    Add To Cart 🛒
                </button>
            </div>
        </div>
    `).join("");
}

// Category Filter
function filterCategory(category) {
    const filtered = category === "All"
        ? products
        : products.filter(p => p.category === category);

    displayProducts(filtered);
}

// Cart Count
function updateCartCount() {
    const cartCount = document.getElementById("cartCount");

    const cart = JSON.parse(
        localStorage.getItem("shopCart")
    ) || [];

    const total = cart.reduce(
        (sum, item) => sum + item.quantity, 0
    );

    if (cartCount) {
        cartCount.innerText = total;
    }
}

// Add To Cart
function addToCart(id) {
    let cart = JSON.parse(
        localStorage.getItem("shopCart")
    ) || [];

    const product = products.find(item => item.id === id);

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("shopCart", JSON.stringify(cart));

    updateCartCount();

    alert(product.name + " added to your cart!");
}

// Contact Form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;

        document.getElementById("formMessage").innerText =
            "Thank you " + name + "! Your message has been received.";

        contactForm.reset();
    });
}

// Initial Load
displayProducts(products);
updateCartCount();

// Initial Load
displayProducts(products);
