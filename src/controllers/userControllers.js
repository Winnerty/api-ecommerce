const User = require("../models/userModels")

exports.userLogIn = (req, res) => {
    res.send("user login")
}

exports.userSignUp = async (req, res) => {
    // Get the data from the request
    const { firstName, email, lastName, imageUrl, role } = req.body;
    const hashedPassword = req.hashedPassword;

    try {
        // Create a new user
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            imageUrl,
            role,
            inventory: [],
        });
        // Save the user to the database
        const savedUser = await newUser.save();
        res.status(201).json({ firstName: savedUser.firstName, email: savedUser.email, role: savedUser.role });
    } catch (err) {
        res.status(400).json({ 
            message: err.message
        });
    }
};