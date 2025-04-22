/**
 * ======================================
 * 🧾 Post.js — Mongoose Model for Posts
 * ======================================
 * 
 * This file defines the MongoDB schema for a post using Mongoose.
 * It represents user-generated posts in the application, each of which
 * includes:
 *   - 🏷️ postType     : A label or category of the post (e.g., "announcement", "update")
 *   - 📝 content      : The actual content or body of the post
 *   - 🕒 dateCreated  : Timestamp of when the post was created (defaults to now)
 * 
 * 🔧 This schema is used in the /create-post route in `auth.js`.
 */

const mongoose = require("mongoose"); // 📦 Import Mongoose library

// =============================
// 📄 Define the post schema
// =============================
const postSchema = new mongoose.Schema({
    postType: {
        type: String,           // 🏷️ Type of the post (e.g., text, announcement)
        required: true          // ✅ Must be provided
    },
    content: {
        type: String,           // 📝 Main content/body of the post
        required: true          // ✅ Must be provided
    },
    dateCreated: {
        type: Date,             // 🕒 Timestamp when the post is created
        default: Date.now       // 📅 Automatically set to current date/time
    }
});

// 🏗️ Export the model to use in routes
module.exports = mongoose.model("Post", postSchema);
