import React from "react";
import "./build-portfolio.css";
import {
  FaUserTie,
  FaLaptopCode,
  FaHtml5,
  FaGithub,
  FaServer,
  FaReact,
  FaPhp,
} from "react-icons/fa";

const personalCards = [
  {
    icon: <FaUserTie className="card-icon" />,
    title: "Personal Portfolio",
    description: "Showcase your skills, achievements, and personality online.",
  },
];

const templatesCards = [
  {
    icon: <FaLaptopCode className="card-icon" />,
    title: "Professional Templates",
    description:
      "Ready-made layouts for companies and freelancers with modern design.",
  },
  {
    icon: <FaHtml5 className="card-icon" />,
    title: "Minimal Personal Templates",
    description:
      "Elegant and lightweight templates for personal branding and resumes.",
  },
];

const techCards = [
  {
    icon: <FaGithub className="card-icon" />,
    title: "GitHub Pages",
    description: "Host your static portfolio directly from your GitHub repo.",
  },
  {
    icon: <FaReact className="card-icon" />,
    title: "MERN Stack",
    description:
      "Full-stack portfolio with MongoDB, Express, React, and Node.js.",
  },
  {
    icon: <FaPhp className="card-icon" />,
    title: "PHP & MySQL",
    description:
      "Dynamic server-side portfolio with PHP backend and database integration.",
  },
  {
    icon: <FaServer className="card-icon" />,
    title: "Custom Hosting",
    description:
      "Deploy your portfolio on custom domains using Netlify, Vercel, etc.",
  },
];

const BuildPortfolio = () => {
  return (
    <div className="content-container">
      <h2 className="content-title">Build Portfolio</h2>

      <h3 className="section-heading">✨ Personal Portfolio</h3>
      <div className="card-grid">
        {personalCards.map((card, index) => (
          <div key={index} className="content-card">
            {card.icon}
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <h3 className="section-heading">📁 Templates</h3>
      <div className="card-grid">
        {templatesCards.map((card, index) => (
          <div key={index} className="content-card">
            {card.icon}
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <h3 className="section-heading">🛠️ Technology Stack</h3>
      <div className="card-grid">
        {techCards.map((card, index) => (
          <div key={index} className="content-card">
            {card.icon}
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuildPortfolio;
