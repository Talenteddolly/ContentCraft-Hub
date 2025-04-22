import { Link, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import Logo from "./assets/logo/Logo.webp";
import AboutLayout from "./About"; // Import About Layout
import "bootstrap/dist/css/bootstrap.min.css";
import "./cards.css";
import "./App.css";
import MainPage from "./main-page"; // Ensure the correct file path
import SignIn from "./sign-in"; // Ensure the correct file path
import SignUp from "./sign-up"; // Ensure the correct file path
import WriteContent from "./write-content"; // Ensure the correct file path
import BuildPortfolio from "./build-portfolio";
import LearnCode from "./learn-code";
import UserConnect from "./user-connect";
import ContentTips from "./content-tips";
import NewsFeed from "./news-feed";
import CreatePost from "./CreatePost";

// Importing icons from react-icons
import {
  FaHome,
  FaInfoCircle,
  FaFeatherAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaPinterestP,
  FaRedditAlien,
  FaSnapchatGhost,
  FaTiktok,
  FaWhatsapp,
  FaTelegramPlane,
  FaDiscord,
  FaMediumM,
  FaDribbble,
  FaBehance,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="app-container">
        {/* HEADER / NAVBAR */}
        <header className="navbar">
          {/* Left Section */}
          <div className="left-section">
            <div className="logo-container">
              <img
                src={Logo}
                alt="ContentCraft Hub Logo"
                className="logo-img"
              />
            </div>
            <h1 className="site-title">
              <FaFeatherAlt className="feather-icon" />
              ContentCraft Hub
            </h1>
          </div>

          {/* Center NAV LINKS */}
          <nav className="nav-links">
            <Link to="/" className="nav-item">
              <FaHome className="nav-icon" />
              <span className="nav-label">Home</span>
            </Link>
            <Link to="/about" className="nav-item">
              <FaInfoCircle className="nav-icon" />
              <span className="nav-label">About</span>
            </Link>
          </nav>

          {/* Right Section */}
          <div className="auth-buttons">
            <Link to="/sign-in" className="SignIn">
              <button className="signin-btn">
                <FaSignInAlt className="btn-icon" /> Sign In
              </button>
            </Link>
            <Link to="/sign-up" className="SignUp">
              <button className="signup-btn">
                <FaUserPlus className="btn-icon" /> Sign Up
              </button>
            </Link>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<MainPage />} />{" "}
            {/* ✅ Ensure this is loaded by default */}
            <Route path="/about" element={<AboutLayout />} />
            <Route path="*" element={<MainPage />} />{" "}
            {/* ✅ Fallback to MainPage */}
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/write-content" element={<WriteContent />} />
            <Route path="/build-portfolio" element={<BuildPortfolio />} />
            <Route path="/learn-code" element={<LearnCode />} />
            <Route path="/user-connect" element={<UserConnect />} />
            <Route path="/content-tips" element={<ContentTips />} />
            <Route path="/news-feed" element={<NewsFeed />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="footer">
          <p>© 2025 ContentCraft Hub. All rights reserved.</p>
          {/* Footer Icons */}
          <div className="footer-icons">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a
              href="https://github.com/Talenteddolly/ContentCraft-Hub"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a href="#" aria-label="Pinterest">
              <FaPinterestP />
            </a>
            <a href="#" aria-label="Reddit">
              <FaRedditAlien />
            </a>
            <a href="#" aria-label="Snapchat">
              <FaSnapchatGhost />
            </a>
            <a href="#" aria-label="TikTok">
              <FaTiktok />
            </a>
            <a href="#" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="#" aria-label="Telegram">
              <FaTelegramPlane />
            </a>
            <a href="#" aria-label="Discord">
              <FaDiscord />
            </a>
            <a href="#" aria-label="Medium">
              <FaMediumM />
            </a>
            <a href="#" aria-label="Dribbble">
              <FaDribbble />
            </a>
            <a href="#" aria-label="Behance">
              <FaBehance />
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
