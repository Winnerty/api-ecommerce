const express = require("express")
const router = express.Router()
const { hashPassword } = require("../middleware/passencrypt")
const { userLogIn, userSignUp } = require("../controllers/userControllers")
const { verifyToken } = require("../middleware/auth")
const upload = require("../config/multerConfig");

router.get("/", (req, res) => {
    res.send("you've reached users page");
})

router.post("/login", userLogIn)

router.post("/signup", hashPassword, userSignUp)

router.put("/userUpdate", verifyToken, upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "Error uploading the file. Wrong format ?" })
    }
    console.log(req.body)
    console.log(req.file)
    console.log(req.userId)
    const fileUrl = req.protocol + "://" + req.get("host") + "/" + req.file.processedPath
    res.json({ message: "User response reached", fileUrl })
})

module.exports = router