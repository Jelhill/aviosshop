const Product = require("../models/Product")
exports.getProducts = (req, res) => {
    let product = new Product();
    product.getProducts()
    .then(data => res.status(200).json({status: 'success', data})) 
    .catch(err => res.json({status: "error", message: err}))
}


exports.addProduct = (req, res) => {
    let product = new Product(req.body);
    product.addProduct()
    .then(data => {
        res.status(200).json({status: 'success', message: "Product has been added"})
    }) 
    .catch(err => {
        res.json({status: "error", message: err})
    })
}

exports.deleteProduct = (req, res) => {
    let product = new Product({id: req.params.id});
    product.deleteProduct()
    .then(data => {
        res.status(200).json({status: 'success', message: "Product has been deleted"})
    }) 
    .catch(err => {
        res.json({status: "error", message: err})
    })
}

exports.getVarietyByProductId = (req, res) => {
    let product = new Product({id: req.params.product_id});
    product.getVarietyByProductId()
    .then(data => {
        console.log(data)
        res.status(200).json({status: 'success', data})
    }) 
    .catch(err => {
        res.json({status: "error", message: err})
    })
}

exports.addVariety = (req, res) => {
    let product = new Product(req.body);
    console.log(req.body)
    product.addVarietyData()
    .then(data => {
        console.log("Radical", data)
        console.log("Radical2", data[1][0].id)
        let variety_id = data[1][0].id
        product.addVarietyImage(variety_id)
        .then(data => {
            console.log("DDD", data)
        })
        res.status(200).json({status: 'success', data})
    }) 
    .catch(err => {
        res.json({status: "error", message: err})
    })
}



