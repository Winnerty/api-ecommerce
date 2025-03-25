const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("you've reached invoices page");
});

module.exports = router