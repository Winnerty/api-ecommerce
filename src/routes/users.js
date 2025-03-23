const express = require("express")
const router = express.Router()
const { hashPassword } = require("../middleware/passencrypt")
const { userLogIn, userSignUp } = require("../controllers/userControllers")
const { verifyToken } = require("../middleware/auth")
const upload = require("../config/multerConfig");

router.get("/", userLogIn => {
    res.send(req)
})

router.post("/", hashPassword, (req, res) => {
    const { firstName, email } = req.body
    const hashedPassword = req.hashedPassword
    res.json( {firstName, email, hashedPassword, _id: "test_id_123"} )
})

router.post("/login", userLogIn)

router.post("/signup", hashPassword, userSignUp)

router.put("/userUpdate", verifyToken, upload.single("image"), (req, res) => {
    console.log(req.body)
    console.log(req.file)
    console.log(req.userId)
    res.json({ message: "User response reached" })
})

module.exports = router