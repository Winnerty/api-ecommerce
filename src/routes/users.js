const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send('User page')
})

router.post("/", (req, res) => {
    //console.log(req.body)
    //res.send("you've reached the post request")
    const { firstName, email, password } = req.body
    res.json( {firstName, email, password} )
})

module.exports = router