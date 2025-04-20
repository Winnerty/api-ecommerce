const express = require("express")
const router = express.Router()
const verifyToken = require("../middleware/auth")
const productController = require("../controllers/productControllers")

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", verifyToken, productController.createProduct);

module.exports = router