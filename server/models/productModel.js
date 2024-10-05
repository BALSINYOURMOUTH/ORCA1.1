// Example product model (could be connected to a database in a real app)
class Product {
    constructor(id, name, category, price, image) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.image = image;
    }
}

module.exports = Product;
