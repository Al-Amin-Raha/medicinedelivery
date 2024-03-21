const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Use a strong secret key for JWT token generation
const secretKey = "a1b2C3$dEfGhI4jK5lM6nOpQr7sT8uV9wXyZ0"; // Replace this with your own strong secret key

router.post("/createuser",
    body('email', 'Incorrect email').isEmail(),
    body('name', 'Name should have at least 4 characters').isLength({ min: 4 }),
    body('password', 'Password should have at least 5 characters').isLength({ min: 5 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10); // Hash the password
            await User.create({
                name: req.body.name,
                password: hashedPassword, // Store hashed password
                email: req.body.email,
                location: req.body.location
            });
            res.json({ success: true });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    }
);

router.post("/loginuser",
    body('email', 'Incorrect email').isEmail(),
    body('password', 'Password should have at least 5 characters').isLength({ min: 5 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let email = req.body.email;

        try {
            let userdata = await User.findOne({ email });
            if (!userdata) {
                return res.status(400).json({ errors: "Try login with correct credentials" });
            }

            const passwordMatch = await bcrypt.compare(req.body.password, userdata.password);
            if (!passwordMatch) {
                return res.status(400).json({ errors: "Try login with correct credentials" });
            }

            // Generate a JWT token using the strong secret key
            const token = jwt.sign({ userId: userdata._id }, secretKey);

            return res.json({ success: true, token });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    }
);

module.exports = router;
