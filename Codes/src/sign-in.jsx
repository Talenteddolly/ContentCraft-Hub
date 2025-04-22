/**
 * 📄 SignIn Component (sign-in.js)
 *
 * This file defines the SignIn component, which allows users to log into their account by entering
 * their email and password. Upon successful login, users are redirected to the "Create Post" page.
 * The component also displays appropriate messages based on the success or failure of the login attempt.
 *
 * 💻 Key Features:
 * 1. **Email and Password Input**: Users provide their credentials (email and password) through input fields.
 * 2. **Form Submission**: On form submission, the user's credentials are sent to the backend via a POST request.
 * 3. **Error and Success Handling**: Displays messages based on whether the login attempt was successful or failed.
 * 4. **Navigation**: After successful login, the user is redirected to the "Create Post" page using the `useNavigate` hook.
 * 5. **Sign Up Link**: If the user doesn't have an account, they can navigate to the sign-up page via a link.
 *
 * 📚 Dependencies:
 * - `useState` and `useNavigate` from `react` and `react-router-dom` respectively.
 * - `sign-in.css` for styling the component.
 *
 * This component is part of a user authentication flow, allowing registered users to sign in and access protected content.
 */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirecting
import "./sign-in.css";

// SignIn Component
const SignIn = () => {
  // State hooks for email, password, and message handling
  const [email, setEmail] = useState(""); // Holds the email entered by the user
  const [password, setPassword] = useState(""); // Holds the password entered by the user
  const [message, setMessage] = useState(""); // Displays success/error messages
  const navigate = useNavigate(); // Hook for navigation after successful login

  /**
   * handleSubmit - Handles form submission, sends login credentials to backend, and handles the response.
   * @param {Event} e - The form submission event.
   * @returns {void}
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Send the email and password to the backend for authentication
      const res = await fetch("http://localhost:5000/api/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Define content type as JSON
        },
        body: JSON.stringify({ email, password }), // Send email and password as JSON in the request body
      });

      // Parse the JSON response from the backend
      const data = await res.json();

      if (res.ok) {
        // If the response is successful, display the success message
        setMessage(data.message); // Set success message from backend
        navigate("/create-post"); // Redirect to "Create Post" page upon successful login
      } else {
        // If the response is not successful, display the error message from backend
        setMessage(data.error); // Set error message from backend
      }
    } catch (err) {
      // In case of an unexpected error, set a generic error message
      setMessage("Something went wrong"); // Show error message if something goes wrong with the fetch
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Sign In</h2>
        {/* Display message if there is one */}
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleSubmit}>
          {/* Email input field */}
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state on input change
              required // Ensure this field is filled
            />
          </div>

          {/* Password input field */}
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state on input change
              required // Ensure this field is filled
            />
          </div>

          {/* Submit button to trigger form submission */}
          <button type="submit" className="sign-in-btn">
            Sign In
          </button>
        </form>

        {/* Link to navigate to the sign-up page for users who don't have an account */}
        <p className="signup-link">
          Don't have an account? <Link to="/sign-up">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
