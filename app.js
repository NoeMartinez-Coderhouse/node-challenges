class ProductManager{
    constructor(products) {
        this.products = products;
    }
    
    getProducts() {
        console.log('PRODUCTS:');
        console.log('********');
        console.log(JSON.stringify(this.products));
    }
    
    addProduct(title, description, price, thumbnail, code, stock) {
        let p = new Product(title, description, price, thumbnail, code, stock);
        this.products.push(p);
        return p;
    }
    
    getProductById(id) {
        const p = this.products.find((e) => {
            e.code === id
            console.log(e)
            return e;
        });
    }
    
}

class Product{
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

let productManager = new ProductManager([]);

productManager.getProducts();

console.log('*********************************');

let p1 = productManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'sin imagen', 'abc123', 25);

productManager.getProducts();

console.log('*********************************');

let productSearched = productManager.getProductById('abc123');

