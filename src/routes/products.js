const express = require("express")
const router = express.Router()
const { verifyToken } = require("../middleware/auth")
const { getAllProducts, getProductById, createProduct } = require("../controllers/productControllers")

router.get("/", getAllProducts)
router.get("/:id", getProductById)
router.post("/", verifyToken, createProduct)

module.exports = router