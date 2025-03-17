const express = require("express")
const router = express.Router()
const { hashPassword } = require("../middleware/passencrypt")

router.get("/", (req, res) => {
    res.send(req)
})

router.post("/", hashPassword, (req, res) => {
    //console.log(req.body)
    //res.send("you've reached the post request")
    const { firstName, email } = req.body
    const hashedPassword = req.hashedPassword
    res.json( {firstName, email, hashedPassword, _id: "test_id_123"} )
})

module.exports = router