import { Link } from "react-router-dom";
import { FaPlay, FaCogs } from "react-icons/fa";
import CardsSection from "./CardsSection";

const MainPage = () => {
  return (
    <router>
      <main className="main-content">
        <section className="hero-section">
          <h2 className="tagline">
            Crafting Digital Experiences with Elegance & Depth
          </h2>

          {/* Get Started Button */}
          <Link to="/get-started" className="primary-btn">
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
          <p>🔧🚧 This is work in progress... </p>
        </section>
      </main>
    </router>
  );
};

export default MainPage;
