
const products = {

    iced: [
        {
            name: "Iced Americano",
            description: "Bold espresso with chilled water and ice.",
            price: 100,
            image: "/image/Hot Latte.png"
        },
        {
            name: "Iced Latte",
            description: "Smooth espresso with cold fresh milk.",
            price: 120,
            image: "/image/Hot Latte.png"
        },
        {
            name: "Iced Vanilla Latte",
            description: "Creamy latte with sweet vanilla flavor.",
            price: 130,
            image: "/image/Hot Latte.png"
        },
        {
            name: "Iced Caramel Macchiato",
            description: "Espresso, milk and caramel sweetness.",
            price: 140,
            image: "/image/Hot Latte.png"
        },
        {
            name: "Iced Mocha",
            description: "Chocolate, espresso and chilled milk.",
            price: 135,
            image: "/image/Hot Latte.png"
        },
        {
            name: "Iced Spanish Latte",
            description: "Rich espresso with sweet condensed milk.",
            price: 135,
            image: "/image/Hot Latte.png"
        },
        {
            name: "Iced Hazelnut Latte",
            description: "Smooth latte with roasted hazelnut flavor.",
            price: 135,
            image: "/image/Hot Latte.png"
        },
        {
            name: "Iced Matcha Coffee",
            description: "Premium matcha combined with bold coffee.",
            price: 140,
            image: "/image/Hot Latte.png"
        },
        {
            name: "Iced White Mocha",
            description: "White chocolate with espresso and milk.",
            price: 140,
            image: "/image/Hot Latte.png"
        },
        {
            name: "Iced Caramel Latte",
            description: "Creamy iced latte with caramel flavor.",
            price: 130,
            image: "/image/Hot Latte.png"
        }
    ],

    hot: [
        {
            name: "Hot Americano",
            description: "Classic espresso with hot water.",
            price: 95,
            image: "/image/Hot Latte.png"
        },
        {
            name: "Hot Latte",
            description: "Espresso with steamed fresh milk.",
            price: 110,
            image: "/image/Hot Latte.png"
        },
        {
            name: "Vanilla Latte",
            description: "Classic latte with smooth vanilla.",
            price: 120,
            image: "/image/Hot Latte.png"
        },
        {
            name: "Caramel Macchiato",
            description: "Steamed milk, espresso and caramel.",
            price: 130,
            image: "/image/Hot Latte.png"
        },
        {
            name: "Hot Mocha",
            description: "Rich chocolate and espresso with milk.",
            price: 125,
            image: "/image/Hot Latte.png"

        },
        {
            name: "Spanish Latte",
            description: "Espresso with sweet condensed milk.",
            price: 125,
            image: "/image/Hot Latte.png"
        },
        {
            name: "Hazelnut Latte",
            description: "Creamy latte with hazelnut flavor.",
            price: 125,
            image: "/image/Hot Latte.png"
        },
        {
            name: "Cappuccino",
            description: "Espresso with steamed milk and foam.",
            price: 115,
            image: "/image/Hot Latte.png"
        },
        {
            name: "Café au Lait",
            description: "Fresh brewed coffee with warm milk.",
            price: 105,
            image: "/image/Hot Latte.png"
        },
        {
            name: "Flat White",
            description: "Smooth espresso with silky steamed milk.",
            price: 120,
            image: "/image/Hot Latte.png"
        }
    ],

    cakes: [
        {
            name: "Chocolate Cake",
            description: "Rich chocolate cake with creamy frosting.",
            price: 150,
            image: "/image/Hot Latte.png"
        },
        {
            name: "Strawberry Shortcake",
            description: "Soft cake with strawberries and cream.",
            price: 160,
            image: "/image/Hot Latte.png"
        },
        {
            name: "Cheesecake",
            description: "Classic creamy cheesecake.",
            price: 150,
            image: "/image/Hot Latte.png"
        },
        {
            name: "Red Velvet Cake",
            description: "Soft red velvet with cream cheese frosting.",
            price: 160,
            image: "/image/Hot Latte.png"
        },
        {
            name: "Carrot Cake",
            description: "Moist carrot cake with creamy frosting.",
            price: 150,
            image: "/image/Hot Latte.png"
        },
        {
            name: "Tiramisu Cake",
            description: "Coffee flavored cake with creamy mascarpone.",
            price: 170,
            image: "/image/Hot Latte.png"
        },
        {
            name: "Blueberry Cheesecake",
            description: "Creamy cheesecake with blueberry topping.",
            price: 170,
            image: "/image/Hot Latte.png"
        },
        {
            name: "Matcha Cake",
            description: "Soft matcha cake with creamy matcha frosting.",
            price: 160,
            image: "/image/Hot Latte.png"
        },
        {
            name: "Chocolate Fudge Cake",
            description: "Rich chocolate cake with fudge frosting.",
            price: 170,
            image: "/image/Hot Latte.png"
        },
        {
            name: "Ube Cake",
            description: "Soft ube cake with creamy ube frosting.",
            price: 160,
            image: "/image/Hot Latte.png"
        }
    ]

};


let currentCategory = "iced";

let cart = [];


function showCategory(category) {

    currentCategory = category;

    const productsContainer =
        document.getElementById("products");

    const buttons =
        document.querySelectorAll(".category");

    buttons.forEach(button => {
        button.classList.remove("active");
    });

    event.target.classList.add("active");

    productsContainer.innerHTML = "";

    products[category].forEach((product, index) => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

    <div class="product-content">
        <img src="${product.image}" alt="${product.name}" />

        <div class="product-category">
            ${getCategoryName(category)}
        </div>

        <h3>
            ${product.name}
        </h3>

        <p>
            ${product.description}
        </p>

        <div class="product-bottom">

            <strong>
                ₱${product.price.toFixed(2)}
            </strong>

            <button onclick="addToCart('${category}', ${index})">
                Add +
            </button>

        </div>

    </div>
`;

        productsContainer.appendChild(card);

    });

}


function getIcon(category) {

    if (category === "iced") {
        return "🧊";
    }

    if (category === "hot") {
        return "☕";
    }

    return "🍰";
}


function getCategoryName(category) {

    if (category === "iced") {
        return "Iced Coffee";
    }

    if (category === "hot") {
        return "Hot Coffee";
    }

    return "Cakes";
}


function addToCart(category, index) {

    const product = products[category][index];

    const existing =
        cart.find(item => item.name === product.name);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            image: product.image,
            name: product.name,
            price: product.price,
            quantity: 1
        });

    }

    updateCart();

    openCart();

}


function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");

    let total = 0;
    let itemCount = 0;


    if (cart.length === 0) {

        cartItems.innerHTML = `
            < div class="empty-cart" >

                <div>🛒</div>

                <h3>
                    Your cart is empty
                </h3>

                <p>
                    Add something delicious from our menu.
                </p>

            </div >
    `;

    } else {

        cartItems.innerHTML = "";

        cart.forEach((item, index) => {

            const itemTotal =
                item.price * item.quantity;

            total += itemTotal;

            itemCount += item.quantity;


            const cartItem =
                document.createElement("div");

            cartItem.className = "cart-item";
            cartItem.innerHTML = `
            <div class="cart-item-info">

                <img src="${item.image}" alt="${item.name}" />
                <h3>
                    ${item.name}
                </h3>
                <p>
                    ₱${item.price.toFixed(2)}
                </p>
            </div>
            <div class="quantity">
                <button
                    onclick="changeQuantity(${index}, -1)"
                >
                    −
                </button>
                <span>
                    ${item.quantity}
                </span>
                <button
                    onclick="changeQuantity(${index}, 1)"
                >
                    +
                </button>
            </div>
            <strong class="item-total">
                ₱${itemTotal.toFixed(2)}
            </strong>
            <button
                class="remove"
                onclick="removeItem(${index})"
            >
                ×
            </button>      
`;
            cartItems.appendChild(cartItem);
        });
    }


    cartCount.textContent = itemCount;

    cartTotal.textContent =
        `₱${total.toFixed(2)} `;

}


function changeQuantity(index, amount) {

    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }

    updateCart();

}


function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}


function openCart() {

    document
        .getElementById("cartOverlay")
        .classList.add("show");

}


function closeCart() {

    document
        .getElementById("cartOverlay")
        .classList.remove("show");

}


function openCheckout() {

    if (cart.length === 0) {

        alert("Please add an item to your cart first.");

        return;

    }

    closeCart();

    updateCheckout();

    document
        .getElementById("checkoutOverlay")
        .classList.add("show");

}


function closeCheckout() {

    document
        .getElementById("checkoutOverlay")
        .classList.remove("show");

}


function updateCheckout() {

    let total = 0;
    let count = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

        count += item.quantity;

    });


    document.getElementById("checkoutItems")
        .textContent = count;


    document.getElementById("checkoutTotal")
        .textContent = `₱${total.toFixed(2)} `;

}


document
    .getElementById("checkoutForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();


        if (cart.length === 0) {

            alert("Your cart is empty.");

            return;

        }


        // const orderNumber =
        //     Math.floor(100000 + Math.random() * 900000);


        // document.getElementById("orderNumber")
        //     .textContent = orderNumber;


        // closeCheckout();


        document
            .getElementById("successOverlay")
            .classList.add("show");


        console.log("CUSTOMER:");

        console.log(
            document.getElementById("customerName").value
        );

        console.log("PHONE:");

        console.log(
            document.getElementById("customerPhone").value
        );

        console.log("ORDER TYPE:");

        console.log(
            document.querySelector(
                'input[name="orderType"]:checked'
            ).value
        );

        console.log("ORDER:");

        console.log(cart);

    });


function finishOrder() {

    cart = [];

    updateCart();

    document
        .getElementById("successOverlay")
        .classList.remove("show");

    document
        .getElementById("checkoutForm")
        .reset();

}


showCategory("iced");