import { Link } from "react-router-dom";
import About from "./About";
import "./AboutLayout.css"; // Custom styling for About Layout

const AboutLayout = () => {
  return (
    <div className="about-layout">
      {/* Header Section */}
      <header className="about-header">
        <h1>About Us</h1>
        <p>
          Welcome to ContentCraft Hub! We are a dynamic platform focused on
          empowering creators by providing essential resources and tools for
          producing exceptional content. Our goal is to help you grow your
          audience and create impactful digital experiences.
        </p>
      </header>

      {/* Mission Section */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At ContentCraft Hub, we aim to bridge the gap between creative
          potential and technical expertise. Our mission is to equip creators,
          businesses, and organizations with the right tools, insights, and
          support to produce high-quality content that captivates and engages
          audiences globally.
        </p>
      </section>

      {/* Vision Section */}
      <section className="vision">
        <h2>Our Vision</h2>
        <p>
          We envision a world where every creator, whether a hobbyist or a
          professional, has the ability to create, share, and monetize content
          easily and effectively. We are committed to building a community where
          everyone can unlock their full creative potential and thrive.
        </p>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D35AQFBVFy6RO1zGg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1705728026161?e=1744124400&v=beta&t=qZ-j9l7pwTop9yKSz-pAZwjDjFd1YePIqDWrxFM7skU"
              alt="Dolly Sahu"
              className="team-photo"
            />
            <h3>Dolly Sahu</h3>
            <p>Co-Founder & CEO</p>
            <p>
              Dolly is a passionate leader with extensive experience in the
              digital content industry. She is dedicated to empowering creators
              and businesses to succeed in the digital world.
            </p>
          </div>
          <div className="team-member">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQHV72O0MMG7xA/profile-displayphoto-shrink_400_400/B4DZUDtnzGG8Ao-/0/1739524047349?e=1749081600&v=beta&t=sH1qzA9V-nXzyBfWZKlejXNVW5nFqadgL6umb6kLQUo"
              alt="Team Member 2"
              className="team-photo"
            />
            <h3>Second Team Member</h3>
            <p>Lead Developer</p>
            <p>
              With a strong technical background, this team member drives the
              development of new features and innovations to enhance the
              platform.
            </p>
          </div>
        </div>
      </section>

      {/* Back to Home Button */}
      <div className="back-home">
        <Link to="/" className="back-btn">
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
};

export default AboutLayout;
