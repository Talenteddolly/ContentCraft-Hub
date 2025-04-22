import React from "react";
import "./build-portfolio.css";
import {
  FaPenFancy,
  FaImage,
  FaRegLightbulb,
  FaQuoteLeft,
  FaCheckCircle,
} from "react-icons/fa";

const contentTips = [
  {
    icon: <FaPenFancy className="card-icon" />,
    title: "Write Clearly",
    description:
      "Ensure your content is easy to read and understand. Use simple words, short sentences, and active voice. <a href='https://writingcenter.unc.edu/tips-and-tools/' target='_blank'>Writing Tips</a>",
  },
  {
    icon: <FaImage className="card-icon" />,
    title: "Use Visuals",
    description:
      "Incorporate images, graphs, and videos to complement your text and make the content more engaging. <a href='https://www.canva.com/' target='_blank'>Create Visuals</a>",
  },
  {
    icon: <FaRegLightbulb className="card-icon" />,
    title: "Be Creative",
    description:
      "Bring fresh ideas to your content, and think outside the box. Creativity helps you stand out and keep your audience engaged. <a href='https://www.ted.com/topics/creativity' target='_blank'>Learn More</a>",
  },
  {
    icon: <FaQuoteLeft className="card-icon" />,
    title: "Use Quotes",
    description:
      "Incorporating relevant quotes from experts or thought leaders adds credibility and depth to your content. <a href='https://brainyquote.com/' target='_blank'>Browse Quotes</a>",
  },
  {
    icon: <FaCheckCircle className="card-icon" />,
    title: "Provide Actionable Tips",
    description:
      "Offer practical advice that readers can implement immediately. Actionable content is often the most valuable. <a href='https://www.lifehack.org/articles/productivity/10-tips-for-writing-actionable-content.html' target='_blank'>Actionable Content Tips</a>",
  },
];

const ContentTips = () => {
  return (
    <div className="content-container">
      <h2 className="content-title">Content Tips</h2>

      <div className="card-grid">
        {contentTips.map((card, index) => (
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

export default ContentTips;
