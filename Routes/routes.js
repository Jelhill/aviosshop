const express = require("express")
const router = express.Router()
const productController = require("../controllers/productController")


router.get("/", (req, res) => res.json({status: "success", message: "App is working"}))
router.get("/products", productController.getProducts)
router.get("/productVariety/:product_id", productController.getVarietyByProductId)
router.post("/addProduct", productController.addProduct)
router.post("/addVariety", productController.addVariety)


module.exports = router
