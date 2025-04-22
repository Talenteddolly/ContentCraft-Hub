/**
 * ========================================
 * 🔐 auth.js — Authentication & Post Routes
 * ========================================
 * 
 * This file defines routes for user authentication and post creation.
 * It uses Express Router to handle:
 *   - 📝 POST /sign-up      : User registration
 *   - 🔑 POST /sign-in      : User login
 *   - 📮 POST /create-post  : Create a new post
 * 
 * 📁 Linked Files:
 *   - User model: `../models/User.js` defines user schema.
 *   - Post model: `../models/Post.js` defines post schema.
 * 
 * ⚠️ Passwords are currently stored in plain text.
 * It is highly recommended to use bcrypt to hash passwords before saving.
 */

const express = require("express");
const router = express.Router();                     // 🚦 Initialize Express Router

const User = require("../models/User");              // 👤 Import the User schema/model
const Post = require("../models/Post");              // 🧾 Import the Post schema/model

// ==========================
// 📝 POST /sign-up
// ==========================
// Registers a new user. Validates if passwords match and email is unique.
router.post("/sign-up", async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    // 🔐 Check if passwords match
    if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
    }

    try {
        // 🔍 Check if email already exists in the database
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }

        // ✅ Create a new user instance
        const user = new User({ name, email, password }); // Note: Hashing password is recommended
        await user.save();                                 // 💾 Save the user in the database

        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        console.error("Sign-up error:", err);
        res.status(500).json({ error: "Server error" });
    }
});

// ==========================
// 🔑 POST /sign-in
// ==========================
// Logs in a user by checking email and password.
router.post("/sign-in", async (req, res) => {
    const { email, password } = req.body;

    try {
        // 🔍 Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        // 🧪 Check password match (Note: use bcrypt.compare if hashing)
        if (user.password !== password) {
            return res.status(400).json({ error: "Incorrect password" });
        }

        res.status(200).json({ message: "Login successful", user });
    } catch (err) {
        console.error("Sign-in error:", err);
        res.status(500).json({ error: "Server error" });
    }
});

// ==========================
// 📮 POST /create-post
// ==========================
// Creates a new post with a type and content.
router.post("/create-post", async (req, res) => {
    const { postType, content } = req.body;

    try {
        // 🆕 Create and save a new post
        const post = new Post({ postType, content });
        await post.save();

        res.status(201).json({ message: "Post created successfully!" });
    } catch (err) {
        console.error("Post creation error:", err);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router; // 🚀 Export the router to be used in server.js
