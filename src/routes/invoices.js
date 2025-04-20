const express = require("express")
const router = express.Router()
const { verifyToken } = require("../middleware/auth")
const { getAllInvoices, getInvoiceById, createInvoice } = require("../controllers/invoiceControllers")

router.get("/", getAllInvoices)
router.get("/:id", getInvoiceById)
router.post("/", verifyToken, createInvoice)

module.exports = router