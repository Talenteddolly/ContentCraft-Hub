/**
 * 📄 SignUp Component (sign-up.js)
 *
 * This file defines the SignUp component, which allows users to create a new account by entering their
 * full name, email, password, and confirming the password. Upon successful registration, a success alert
 * is displayed, and the form is cleared.
 *
 * 💻 Key Features:
 * 1. **Full Name, Email, Password, and Confirm Password Inputs**: Users enter their details in these input fields.
 * 2. **Form Submission**: On form submission, the user's input data is sent to the backend via a POST request.
 * 3. **Error and Success Handling**: Displays alerts based on the result of the registration attempt.
 * 4. **Form Reset**: After successful registration, the form fields are reset.
 * 5. **Sign In Link**: If the user already has an account, they can navigate to the sign-in page via a link.
 *
 * 📚 Dependencies:
 * - `useState` from `react` for handling form input states.
 * - `sign-up.css` for styling the component.
 * - `react-router-dom` for navigation to the sign-in page.
 *
 * This component is part of the user authentication flow, allowing new users to register and create an account.
 */

import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation to Sign In page
import "./sign-up.css";

// SignUp Component
const SignUp = () => {
  // State variables for handling form input values
  const [name, setName] = useState(""); // Holds the full name entered by the user
  const [email, setEmail] = useState(""); // Holds the email entered by the user
  const [password, setPassword] = useState(""); // Holds the password entered by the user
  const [confirmPassword, setConfirmPassword] = useState(""); // Holds the confirmed password

  /**
   * handleSubmit - Handles form submission and sends user data to the backend for registration.
   * @param {Event} e - The form submission event.
   * @returns {void}
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form reload behavior

    // Prepare the data payload with the form input values
    const payload = { name, email, password, confirmPassword };

    try {
      // Send the user data to the backend via a POST request
      const res = await fetch("http://localhost:5000/api/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // Specify the content type
        body: JSON.stringify(payload), // Convert the data into JSON format for the request body
      });

      // Parse the response from the backend
      const data = await res.json();

      // If the response is not OK, throw an error
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      // Display a success message
      alert("User registered successfully");

      // Optionally clear the form fields after successful registration
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      // Display an error message if something went wrong
      alert(err.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>
        {/* Form to handle user registration */}
        <form onSubmit={handleSubmit}>
          {/* Input field for the user's full name */}
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              value={name} // Bind input value to state
              onChange={(e) => setName(e.target.value)} // Update the name state on input change
              required // Make this field mandatory
            />
          </div>

          {/* Input field for the user's email */}
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email} // Bind input value to state
              onChange={(e) => setEmail(e.target.value)} // Update the email state on input change
              required // Make this field mandatory
            />
          </div>

          {/* Input field for the user's password */}
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password} // Bind input value to state
              onChange={(e) => setPassword(e.target.value)} // Update the password state on input change
              required // Make this field mandatory
            />
          </div>

          {/* Input field for confirming the user's password */}
          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword} // Bind input value to state
              onChange={(e) => setConfirmPassword(e.target.value)} // Update the confirmPassword state on input change
              required // Make this field mandatory
            />
          </div>

          {/* Submit button for form submission */}
          <button type="submit" className="sign-up-btn">
            Sign Up
          </button>
        </form>

        {/* Link to navigate to the Sign In page for users who already have an account */}
        <p className="signin-link">
          Already have an account? <Link to="/sign-in">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
