import { useState } from 'react';
import Logo from './assets/logo/Logo.webp';
import './App.css';

// Importing icons from react-icons
import {
  FaHome,
  FaInfoCircle,
  FaBriefcase,
  FaEnvelope,
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
  FaBehance
} from 'react-icons/fa';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      
      {/* HEADER / NAVBAR */}
      <header className="navbar">
        <div className="logo-container">
          <img src={Logo} alt="ContentCraft Hub Logo" className="logo-img" />
        </div>

        <h1 className="site-title">
          <FaFeatherAlt className="feather-icon" />
          ContentCraft Hub
        </h1>

        <nav className="nav-links">
          <a href="#" className="nav-item">
            <FaHome className="nav-icon" />
            <span className="nav-label">Home</span>
          </a>
          <a href="#" className="nav-item">
            <FaInfoCircle className="nav-icon" />
            <span className="nav-label">About</span>
          </a>
          <a href="#" className="nav-item">
            <FaEnvelope className="nav-icon" />
            <span className="nav-label">Contact</span>
          </a>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <section className="hero-section">
          <h2 className="tagline">
            Crafting Digital Experiences with Elegance & Depth
          </h2>
          <button className="primary-btn" onClick={() => setCount(count + 1)}>
            Clicked {count} times
          </button>
        </section>

        <section className="info-section">
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 ContentCraft Hub. All rights reserved.</p>
        
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
          <a href="#" aria-label="GitHub">
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
  );
}

export default App;
