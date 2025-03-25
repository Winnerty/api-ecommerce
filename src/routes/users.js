const express = require("express")
const router = express.Router()
const { hashPassword } = require("../middleware/passencrypt")
const { userLogIn, userSignUp } = require("../controllers/userControllers")
const { verifyToken } = require("../middleware/auth")
const upload = require("../config/multerConfig");

router.get("/", userLogIn => {
    res.send(req)
})

router.post("/login", userLogIn)

router.post("/signup", hashPassword, userSignUp)

router.put("/userUpdate", verifyToken, upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "Error uploading the file. Wrong format ?" })
    }
    console.log(req.body) // Logs the form fields
    console.log(req.file) // Logs the uploaded file details
    console.log(req.userId) // From the verifyToken middleware
    const fileUrl = req.protocol + "://" + req.get("host") + "/" + req.file.processedPath
    res.json({ message: "User response reached", fileUrl })
})

module.exports = router