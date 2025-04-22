import React from "react";
import "./build-portfolio.css";
import {
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";

const connectTips = [
  {
    icon: <FaLinkedin className="card-icon" />,
    title: "LinkedIn",
    description:
      "Connect with users on LinkedIn for professional networking. <a href='https://www.linkedin.com/in/your-profile/' target='_blank'>Visit LinkedIn</a>",
  },
  {
    icon: <FaTwitter className="card-icon" />,
    title: "Twitter",
    description:
      "Follow users on Twitter for tech insights and updates. <a href='https://twitter.com/your-profile' target='_blank'>Visit Twitter</a>",
  },
  {
    icon: <FaEnvelope className="card-icon" />,
    title: "Email",
    description:
      "Send users an email for inquiries or collaborations. <a href='mailto:your.email@example.com' target='_blank'>Send Email</a>",
  },
  {
    icon: <FaGithub className="card-icon" />,
    title: "GitHub",
    description:
      "Check out users code on GitHub for open-source projects. <a href='https://github.com/madhurimarawat' target='_blank'>Visit GitHub</a>",
  },
  {
    icon: <FaPhoneAlt className="card-icon" />,
    title: "Phone",
    description:
      "Feel free to reach out via phone for urgent matters. <a href='tel:+1234567890' target='_blank'>Call Now</a>",
  },
];

const LearnConnect = () => {
  return (
    <div className="content-container">
      <h2 className="content-title">Connect With Users</h2>

      <div className="card-grid">
        {connectTips.map((card, index) => (
          <div key={index} className="content-card">
            {card.icon}
            <h3>{card.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: card.description }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnConnect;
