/**
 * ============================================
 * 🌐 server.js — Main Entry Point of the Backend
 * ============================================
 * 
 * This file serves as the entry point for the Node.js backend server.
 * It sets up the Express server, connects to MongoDB using Mongoose,
 * enables middleware for handling CORS and JSON, and routes all API requests
 * to the `/api` endpoint via `routes/auth.js`.
 * 
 * 🔗 Dependencies:
 *   - express: Web framework to handle routes and HTTP requests.
 *   - mongoose: ODM to interact with MongoDB.
 *   - cors: Middleware to enable Cross-Origin Resource Sharing.
 *   - dotenv: Loads environment variables from `.env` file.
 * 
 * 🔌 Flow:
 *   1. Load environment variables (like PORT, MONGO_URI).
 *   2. Set up middleware (CORS, JSON parsing).
 *   3. Connect to MongoDB.
 *   4. Use route file for handling API endpoints.
 *   5. Start the server and listen on a specified port.
 * 
 * 📁 Project Connection:
 *   - `/routes/auth.js` contains logic for user authentication and post creation.
 *   - `/models/User.js` and `/models/Post.js` define MongoDB schemas.
 */

const express = require("express");           // 🌐 Express for handling HTTP requests
const mongoose = require("mongoose");         // 🍃 Mongoose for MongoDB connection and schema modeling
const cors = require("cors");                 // 🔓 Enable CORS so frontend (on a different origin) can access backend
require("dotenv").config();                   // 🔐 Load environment variables from .env file

const app = express();                        // 🎉 Initialize the Express application
const PORT = process.env.PORT || 5000;        // 🔌 Use PORT from .env or default to 5000

app.use(cors());                              // 🔓 Allow cross-origin requests from frontend
app.use(express.json());                      // 📦 Parse incoming requests with JSON payloads

// 🛠️ Connect to MongoDB using URI from .env
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,                // 📜 Use new URL parser
        useUnifiedTopology: true,             // 🌍 Use new server discovery and monitoring engine
    })
    .then(() => console.log("MongoDB connected ✅"))  // ✅ Successful connection
    .catch((err) => console.log("MongoDB error ❌", err)); // ❌ Error connecting to database

// 📌 Route all requests starting with /api to routes defined in auth.js
app.use("/api", require("./routes/auth"));    // 🚪 /api endpoints: sign-up, sign-in, create-post

// 🚀 Start the server and listen on the defined PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
