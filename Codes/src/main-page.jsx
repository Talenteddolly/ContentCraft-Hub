import { Link } from "react-router-dom";
import { FaPlay, FaCogs } from "react-icons/fa";
import CardsSection from "./CardsSection";

const MainPage = () => {
  return (
    <main className="main-content">
      <section className="hero-section">
        <h2 className="tagline">
          Crafting Digital Experiences with Elegance & Depth
        </h2>

        {/* Get Started Button links to sign-in page */}
        <Link to="/sign-in" className="primary-btn">
          <FaPlay className="btn-icon" /> Get Started
        </Link>
      </section>

      {/* Our Services Section with Icon */}
      <h1 className="services-heading">
        <FaCogs className="services-icon" /> Service Solutions
      </h1>

      {/* Cards Section */}
      <CardsSection />

      <section className="info-section">
        <p>✨ Made with love ❤️, React ⚛️, and collaboration 🚀!</p>
      </section>
    </main>
  );
};

export default MainPage;
