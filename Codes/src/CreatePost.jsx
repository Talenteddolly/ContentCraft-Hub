/**
 * 📄 Create Post Component (create-post.js)
 *
 * This file defines the CreatePost component, which allows users to create a post by selecting a
 * category from a list of predefined categories. Each category is associated with a template,
 * and when a user selects a category, the content area is populated with a predefined message.
 * Users can customize the content and submit the post.
 *
 * 💻 Key Features:
 * 1. **Category Selection**: Users can select a post category, which will auto-fill content based
 *    on predefined templates.
 * 2. **Dynamic Icons**: Each category is visually represented by an icon to help users easily
 *    identify the category.
 * 3. **Form Submission**: Upon submission, the post type and content are sent to the backend via
 *    a POST request. The user is notified of the success or failure of the submission.
 * 4. **Navigation**: After a successful post submission, users are redirected to a dashboard page.
 * 5. **Error Handling**: Error messages are displayed in case of failure, with specific messages
 *    for network issues or other errors.
 *
 * 📚 Dependencies:
 * - `useState` and `useNavigate` from `react` and `react-router-dom` respectively.
 * - `react-icons/fa` for displaying various category icons.
 * - `create-post.css` for styling the component.
 *
 * This component is typically used in a social media or content management platform where
 * users can share posts of various types (e.g., marketing, photography, gaming, etc.).
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Updated from useHistory
import {
  FaBullhorn,
  FaTag,
  FaBriefcase,
  FaNewspaper,
  FaCamera,
  FaCogs,
  FaChartLine,
  FaGift,
  FaBusinessTime,
  FaPeopleCarry,
  FaUtensils,
  FaGamepad,
  FaHeart,
} from "react-icons/fa"; // Import additional icons
import "./create-post.css";

/**
 * 📝 CreatePost Component
 *
 * This component allows users to select a category for their post, populate the content
 * with predefined templates, and submit the post. Categories include marketing tips,
 * promotions, news feed, gaming, and more. Once the post is submitted, the user is redirected
 * to the dashboard.
 *
 * 👇 Main Features:
 * 1. Post categories with related icons.
 * 2. Predefined content templates based on the selected category.
 * 3. Form submission that sends the post data to the backend.
 * 4. Displays a success or error message based on the response.
 */
const CreatePost = () => {
  // 🧑‍💻 useState hooks to manage the state of the form inputs and messages
  const [postType, setPostType] = useState(""); // Post category type
  const [content, setContent] = useState(""); // Post content based on selected category
  const [message, setMessage] = useState(""); // Message for feedback to the user

  // 🔄 useNavigate hook is used for redirecting after form submission
  const navigate = useNavigate(); // Updated hook for navigation (previously useHistory)

  // 📋 Predefined templates for 13 categories of posts with relevant emojis
  const templates = {
    "Marketing Tips":
      "🚀 Marketing Tips: Here we are marketing our product. Highlight features and benefits to attract users.",
    Promotion:
      "🎉 Promotion: Special discount offer! 50% off on all products. Hurry, limited time only!",
    "Personal Portfolio":
      "💼 Personal Portfolio: Showcasing my work and achievements in web development. Check out my latest projects.",
    "News Feed":
      "📰 News Feed: Today's hot topic is about the latest tech trends. Read on for the details of upcoming innovations in AI.",
    Photography:
      "📸 Photography: Capturing beautiful moments in nature. Check out my latest photo collection.",
    "Tech Innovations":
      "⚙️ Tech Innovations: The latest trends in technology, from AI to robotics. Discover the breakthroughs shaping the future.",
    "Business Insights":
      "📊 Business Insights: Market analysis, business strategies, and industry news. Stay informed on the latest in business.",
    "Special Offers":
      "🎁 Special Offers: Exclusive offers for our customers. Grab them before they're gone!",
    Consultation:
      "💼 Consultation: Book a session with me to discuss strategies for growth, development, and success.",
    "Community Event":
      "🤝 Community Event: Join us for a local event! Connect with others and participate in exciting activities.",
    "Food & Drink":
      "🍽️ Food & Drink: Check out my favorite recipes and reviews of the best restaurants in town.",
    Gaming:
      "🎮 Gaming: Dive into the latest video game reviews, tips, and community events!",
    Lifestyle:
      "❤️ Lifestyle: Tips on living a healthy, happy, and balanced life. Find inspiration for a better lifestyle.",
  };

  // 🚀 Handle post submission by making a POST request to the backend
  const handlePostSubmit = async (e) => {
    e.preventDefault(); // Prevents default form submission

    try {
      // 📡 Sending POST request to backend to create the post
      const res = await fetch("http://localhost:5000/api/create-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify content type as JSON
        },
        body: JSON.stringify({ postType, content }), // Send selected post type and content as JSON
      });

      const data = await res.json(); // Parse the response from the backend

      // ✅ If the response is successful
      if (res.ok) {
        setMessage("Post submitted successfully!"); // Display success message
        navigate("/dashboard"); // Redirect to dashboard page after successful submission
      } else {
        setMessage(data.error || "Something went wrong"); // Display error message if something went wrong
      }
    } catch (err) {
      setMessage("Something went wrong"); // Handle any network errors
    }
  };

  // ✨ Handle post type selection and set the predefined template accordingly
  const handlePostTypeChange = (e) => {
    const selectedPostType = e.target.value; // Get selected post type
    setPostType(selectedPostType); // Update state with selected post type
    // Set the predefined template content based on selected post type
    if (selectedPostType) {
      setContent(templates[selectedPostType]);
    } else {
      setContent(""); // Clear content if no post type is selected
    }
  };

  return (
    <div className="content-container">
      <h2 className="content-title">Choose a Post Category</h2>
      <div className="card-grid">
        {/* Display all categories with icons and templates */}
        {Object.keys(templates).map((category) => (
          <div className="content-card" key={category}>
            <div className="card-icon">
              {/* 🖼️ Display icon based on selected category */}
              {category === "Marketing Tips" && <FaBullhorn />}
              {category === "Promotion" && <FaTag />}
              {category === "Personal Portfolio" && <FaBriefcase />}
              {category === "News Feed" && <FaNewspaper />}
              {category === "Photography" && <FaCamera />}
              {category === "Tech Innovations" && <FaCogs />}
              {category === "Business Insights" && <FaChartLine />}
              {category === "Special Offers" && <FaGift />}
              {category === "Consultation" && <FaBusinessTime />}
              {category === "Community Event" && <FaPeopleCarry />}
              {category === "Food & Drink" && <FaUtensils />}
              {category === "Gaming" && <FaGamepad />}
              {category === "Lifestyle" && <FaHeart />}
            </div>
            <h3>{category}</h3> {/* Display category name */}
            <p>{templates[category]}</p>{" "}
            {/* Display predefined template for the category */}
          </div>
        ))}
      </div>

      <div className="create-post-card">
        <h2>Create Post</h2>
        {/* 📝 Display message based on post submission result */}
        {message && <p className="message">{message}</p>}

        <form onSubmit={handlePostSubmit}>
          <div className="input-group">
            <label>Post Type</label>
            <select value={postType} onChange={handlePostTypeChange} required>
              <option value="">Select Post Type</option>
              {/* 🚩 Populate select options with post categories */}
              {Object.keys(templates).map((category) => (
                <option value={category} key={category}>
                  {category} {/* Category name only */}
                </option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label>Content</label>
            {/* 📝 Textarea for post content, editable by the user */}
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="create-post-btn">
            Submit Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
