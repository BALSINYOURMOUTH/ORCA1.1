document.addEventListener('DOMContentLoaded', () => {

    const products = [
        { id: 1, name: 'Orca T-Shirt', category: 'tshirts', price: 29.99, image: 'product-T1.jpg' },
        { id: 2, name: 'Orca T-Shirt', category: 'tshirts', price: 29.99, image: 'product-T2.jpg' },
        { id: 3, name: 'Orca T-Shirt', category: 'tshirts', price: 29.99, image: 'product-T3.jpg' },

        { id: 4, name: 'Orca Hoodie', category: 'hoodies', price: 49.99, image: 'product-H1.jpg' },
        { id: 5, name: 'Orca Hoodie', category: 'hoodies', price: 49.99, image: 'product-H2.jpg' },
        { id: 6, name: 'Orca Hoodie', category: 'hoodies', price: 49.99, image: 'product-H3.jpg' },

        { id: 7, name: 'Orca Cap', category: 'accessories', price: 19.99, image: 'product-A1.jpg' },
        { id: 8, name: 'Orca Cap', category: 'accessories', price: 19.99, image: 'product-A2.jpg' },
        { id: 9, name: 'Orca Cap', category: 'accessories', price: 19.99, image: 'product-A3.jpg' },

        // Add more products here
    ];
    
    const productList = document.getElementById('product-list');
    const filterCategory = document.getElementById('filter-category');
    const sortProducts = document.getElementById('sort-products');
    
    const displayProducts = (filteredProducts) => {
        productList.innerHTML = '';
        filteredProducts.forEach(product => {
            productList.innerHTML += `
                <div class="product-item" data-category="${product.category}" data-price="${product.price}">
                    <a href="product.html?id=${product.id}">
                        <img src="assets/img/products/${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>$${product.price.toFixed(2)}</p>
                    </a>
                    <button class="btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>`;
        });
    };
    
    // Call displayProducts with all products initially
    displayProducts(products);
    
    
    

    const filterAndSort = () => {
        let filteredProducts = [...products];

        const category = filterCategory.value;
        if (category !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === category);
        }

        const sortOption = sortProducts.value;
        if (sortOption === 'price-asc') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'price-desc') {
            filteredProducts.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'newest') {
            filteredProducts.sort((a, b) => b.id - a.id);
        }

        displayProducts(filteredProducts);
    };

    filterCategory.addEventListener('change', filterAndSort);
    sortProducts.addEventListener('change', filterAndSort);

    displayProducts(products);


});
