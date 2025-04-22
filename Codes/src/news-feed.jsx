import React from "react";
import "./build-portfolio.css";
import {
  FaNewspaper,
  FaClock,
  FaShareAlt,
  FaGlobe,
  FaTag,
} from "react-icons/fa";

const newsFeed = [
  {
    icon: <FaNewspaper className="card-icon" />,
    title: "Tech Trends in 2025",
    description:
      "Explore the latest technological advancements expected in the year 2025. <a href='https://example.com/tech-trends' target='_blank'>Read More</a>",
  },
  {
    icon: <FaClock className="card-icon" />,
    title: "Global Events Timeline",
    description:
      "A timeline of significant events happening around the world this year. <a href='https://example.com/global-events' target='_blank'>Read More</a>",
  },
  {
    icon: <FaShareAlt className="card-icon" />,
    title: "Social Media and Privacy",
    description:
      "A detailed analysis of how privacy is being compromised on social media platforms. <a href='https://example.com/social-privacy' target='_blank'>Read More</a>",
  },
  {
    icon: <FaGlobe className="card-icon" />,
    title: "Climate Change Impact",
    description:
      "How global warming is affecting ecosystems and what can be done about it. <a href='https://example.com/climate-change' target='_blank'>Read More</a>",
  },
  {
    icon: <FaTag className="card-icon" />,
    title: "AI in Everyday Life",
    description:
      "Artificial intelligence is now a part of our daily routines. Discover how. <a href='https://example.com/ai-life' target='_blank'>Read More</a>",
  },
  {
    icon: <FaNewspaper className="card-icon" />,
    title: "Stock Market Updates",
    description:
      "Latest updates on stock market trends and what they mean for investors. <a href='https://example.com/stock-market' target='_blank'>Read More</a>",
  },
  {
    icon: <FaClock className="card-icon" />,
    title: "The Future of Remote Work",
    description:
      "How the remote work culture is changing businesses and work environments. <a href='https://example.com/remote-work' target='_blank'>Read More</a>",
  },
  {
    icon: <FaShareAlt className="card-icon" />,
    title: "Data Security Concerns",
    description:
      "Why data security should be a priority for businesses and individuals. <a href='https://example.com/data-security' target='_blank'>Read More</a>",
  },
  {
    icon: <FaGlobe className="card-icon" />,
    title: "Future of Space Exploration",
    description:
      "NASA and other space agencies push the boundaries of space travel. <a href='https://example.com/space-exploration' target='_blank'>Read More</a>",
  },
  {
    icon: <FaTag className="card-icon" />,
    title: "Economic Recovery Post-Pandemic",
    description:
      "Exploring the economic recovery after the COVID-19 pandemic and its global effects. <a href='https://example.com/economic-recovery' target='_blank'>Read More</a>",
  },
];

const NewsFeed = () => {
  return (
    <div className="content-container">
      <h2 className="content-title">General News</h2>

      <div className="card-grid">
        {newsFeed.map((card, index) => (
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

export default NewsFeed;
