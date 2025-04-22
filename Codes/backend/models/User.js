/**
 * ====================================
 * 👤 User.js — Mongoose Model for Users
 * ====================================
 * 
 * This schema defines the structure of the User collection in MongoDB.
 * It is used to store user registration and authentication information.
 * Each user has:
 *   - 🧑 name     : The full name of the user
 *   - 📧 email    : User's email address (must be unique)
 *   - 🔒 password : User's password (should be hashed in production)
 * 
 * 🔐 Passwords are stored in plain text here for simplicity, 
 * but you should use bcrypt or similar libraries to hash passwords 
 * before saving them in production apps.
 */

const mongoose = require("mongoose"); // 📦 Import Mongoose

// ==============================
// 📄 Define the user schema
// ==============================
const userSchema = new mongoose.Schema({
    name: {
        type: String,          // 🧑 User's full name
        required: true         // ✅ Must be provided
    },
    email: {
        type: String,          // 📧 User's email address
        required: true,        // ✅ Must be provided
        unique: true           // 🔐 Must be unique across all users
    },
    password: {
        type: String,          // 🔒 User's password (should be hashed!)
        required: true         // ✅ Must be provided
    }
});

// 🏗️ Export the User model to be used in authentication routes
module.exports = mongoose.model("User", userSchema);
