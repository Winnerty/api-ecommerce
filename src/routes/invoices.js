const express = require("express")
const router = express.Router()
const verifyToken = require("../middleware/auth")
const invoiceController = require("../controllers/invoiceControllers")

router.get("/", invoiceController.getAllInvoices)
router.get("/:id", invoiceController.getInvoiceById)
router.post("/", verifyToken, invoiceController.createInvoice)

module.exports = router