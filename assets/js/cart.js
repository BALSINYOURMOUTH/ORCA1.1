// Sample cart data (could be fetched from a server or localStorage)
const cartItems = [
    { id: 1, name: 'Orca T-Shirt', price: 29.99, quantity: 1 },
    { id: 2, name: 'Orca Hoodie', price: 49.99, quantity: 2 }
];

// Function to display cart items
function displayCartItems() {
    const cartContainer = document.querySelector('.cart-items');
    cartContainer.innerHTML = '';

    cartItems.forEach(item => {
        cartContainer.innerHTML += `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
                <button class="btn-secondary" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
    });

    updateCartTotal();
}

// Function to update the total price
function updateCartTotal() {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
}

// Function to remove item from cart
function removeFromCart(id) {
    const index = cartItems.findIndex(item => item.id === id);
    if (index !== -1) {
        cartItems.splice(index, 1);
    }
    displayCartItems();
}

// Function to proceed to checkout (to be implemented)
function proceedToCheckout() {
    alert('Proceeding to checkout...');
    // Implement checkout functionality here
}

// Initialize cart display on page load
document.addEventListener('DOMContentLoaded', displayCartItems);
