import React from "react";
import "./write-content.css";
import {
  FaPenNib,
  FaBullhorn,
  FaStore,
  FaLightbulb,
  FaChalkboardTeacher,
  FaHeadset,
  FaPlay,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Import Link

const contentCards = [
  {
    icon: <FaPenNib className="card-icon" />,
    title: "Content Writing",
    description:
      "Craft compelling and SEO-optimized articles that engage and convert readers.",
  },
  {
    icon: <FaBullhorn className="card-icon" />,
    title: "Promotions",
    description:
      "Strategize and execute promotions that boost your brand visibility and growth.",
  },
  {
    icon: <FaStore className="card-icon" />,
    title: "Market Trends",
    description:
      "Stay ahead with data-driven insights into the latest market movements.",
  },
  {
    icon: <FaLightbulb className="card-icon" />,
    title: "Creative Ideas",
    description:
      "Innovative and fresh ideas to differentiate your brand and make it memorable.",
  },
  {
    icon: <FaChalkboardTeacher className="card-icon" />,
    title: "Campaign Planning",
    description:
      "Plan marketing campaigns from ideation to execution with targeted messaging.",
  },
  {
    icon: <FaHeadset className="card-icon" />,
    title: "Customer Support",
    description:
      "Offer responsive and human-centered support to build trust and loyalty.",
  },
];

const WriteContent = () => {
  return (
    <div className="content-container">
      <h2 className="content-title">Write Content</h2>
      <div className="card-grid">
        {contentCards.map((card, index) => (
          <div key={index} className="content-card">
            {card.icon}
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      {/* Get Started Button links to sign-in page */}
      <div style={{ marginTop: "3rem" }}>
        <Link to="/create-post" className="primary-btn-write">
          <FaPlay className="btn-icon" /> Write Post
        </Link>
      </div>
    </div>
  );
};

export default WriteContent;
