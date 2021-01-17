const mysqlConnection  = require("../db")

function Product(data) {
    this.data = data;
    this.errors = []
    this.now = new Date().toISOString().slice(0, 19).replace('T', ' ');

}

Product.prototype.getProducts = function() {
    return new Promise((resolve, reject) => {
        mysqlConnection.query("SELECT * FROM products", (err, data) => {
            if(err) {
                this.errors.push(err)
                return reject(this.errors)
            }
            resolve(data)
        })
    })
}


Product.prototype.getVarietyByProductId = function() {
    return new Promise((resolve, reject) => {
        mysqlConnection.query(`SELECT * FROM varieties WHERE product_id = ${this.data.id}`, (err, data) => {
            if(err) {
                this.errors.push(err)
                return reject(this.errors)
            }
            resolve(data)
        })
    })
}


Product.prototype.addProduct = function() {
    return new Promise((resolve, reject) => {
        const { product_name, product_description, display_image } = this.data
        let query = `INSERT INTO products (product_name, product_description, date_uploaded, date_edited, display_image) VALUES ('${product_name}', '${product_description}', '${this.now}', '${this.now}', '${display_image}');`
        mysqlConnection.query(query, (err, data) => {
            if(err) {
                this.errors.push(err)
                return reject(this.errors)
            }
            resolve(data)
        })
    })
}


Product.prototype.deleteProduct = function() {
    return new Promise((resolve, reject) => {
        const { id } = this.data
        let query = `DELETE FROM products WHERE id = ${id}`
        mysqlConnection.query(query, (err, data) => {
            if(err) {
                this.errors.push(err)
                return reject(this.errors)
            }
            resolve(data)
        })
    })
}

Product.prototype.addVarietyData = function() {
    return new Promise((resolve, reject) => {
        const { product_id, size, color, quantity} = this.data
        let query = `INSERT INTO varieties (product_id, size, color, quantity, date_uploaded, date_edited) 
            VALUES ('${product_id}', '${size}', '${color}', '${quantity}', '${this.now}', '${this.now}')
            SELECT LAST_INSERT_ID();`
        mysqlConnection.query(query, (err, data) => {
            if(err) {
                console.log("Add V Data", err)
                this.errors.push(err)
                return reject(this.errors)
            }
            resolve(data)
        })
    })
}


Product.prototype.addVarietyImage = function(variety_id) {
    return new Promise((resolve, reject) => {
        const { images, product_id } = this.data
        let mapImage = images.map(image => `('${variety_id}', '${product_id}', '${image}', '${this.now}', '${this.now}')`).toString()
        
        let query = `INSERT INTO images (variety_id, product_id, image, date_uploaded, date_edited) VALUES ${mapImage};`
        mysqlConnection.query(query, (err, data) => {
            if(err) {
                console.log("Add V Image", err)
                this.errors.push(err)
                return reject(this.errors)
            }
            resolve(data)
        })
    })
}

module.exports = Product