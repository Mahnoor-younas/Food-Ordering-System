
const items = [
    { id: 1, name: "Burger", price: 10, img: "images/burger.png" },
    { id: 2, name: "Pizza", price: 15, img: "images/pizza.png" },
    { id: 3, name: "Fries", price: 5, img: "images/fries.png" }
];

let total = 0;

// Selecting DOM elements
const menuContainer = document.getElementById('menu-items');
const cartList = document.getElementById('cart-list');
const totalPriceDisplay = document.getElementById('total-price');

// 2. Render Menu Items
items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    
    // Using backticks for template literals to inject local paths
    card.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>$${item.price}</p>
        <button onclick="addToCart(${item.id})">Add to Cart</button>
    `;
    menuContainer.appendChild(card);
});

// 3. Add to Cart Function
function addToCart(id) {
    const item = items.find(i => i.id === id);
    
    // Update the Total Price Variable
    total += item.price;
    updateTotalUI();

    // Create the Cart Item Element
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    
    cartItem.innerHTML = `
        <img src="${item.img}" width="40">
        <span>${item.name} - $${item.price}</span>
        <button class="remove-btn">Remove</button>
    `;

    // 4. Remove Item Logic (DOM Traversal/Manipulation)
    cartItem.querySelector('.remove-btn').onclick = function() {
        total -= item.price; // Subtract from total
        cartItem.remove();   // Remove element from DOM
        updateTotalUI();     // Update display
    };

    cartList.appendChild(cartItem);
}

// 5. Update Total Display Helper
function updateTotalUI() {
    totalPriceDisplay.innerText = total;
}

// Bonus: Clear All
function clearCart() {
    cartList.innerHTML = "";
    total = 0;
    updateTotalUI();
}
