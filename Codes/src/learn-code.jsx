import React from "react";
import "./build-portfolio.css";
import {
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";

const programmingConcepts = [
  {
    icon: <FaCode className="card-icon" />,
    title: "Programming Basics",
    description:
      "Understand variables, loops, functions, and data structures in languages like C, C++, Python. <a href='https://developer.mozilla.org/en-US/docs/Learn' target='_blank'>Docs</a>",
  },
];

const webTechStack = [
  {
    icon: <FaHtml5 className="card-icon" />,
    title: "HTML, CSS & JS",
    description:
      "Foundation of web development. Learn structure, styling, and interactivity. <a href='https://developer.mozilla.org/en-US/docs/Web' target='_blank'>MDN</a>",
  },
  {
    icon: <FaReact className="card-icon" />,
    title: "ReactJS",
    description:
      "Build modern user interfaces with React. <a href='https://reactjs.org/' target='_blank'>Official Docs</a>",
  },
  {
    icon: <FaNodeJs className="card-icon" />,
    title: "Node.js & Express",
    description:
      "Backend development with JavaScript. <a href='https://nodejs.org/' target='_blank'>Node Docs</a> | <a href='https://expressjs.com/' target='_blank'>Express Docs</a>",
  },
];

const cssJs = [
  {
    icon: <FaCss3Alt className="card-icon" />,
    title: "CSS Basics",
    description:
      "Style web pages with CSS, covering layout, design, and responsiveness. <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank'>MDN CSS Docs</a>",
  },
  {
    icon: <FaJsSquare className="card-icon" />,
    title: "JavaScript Basics",
    description:
      "Learn the core fundamentals of JavaScript for dynamic content. <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank'>MDN JavaScript Docs</a>",
  },
];

const toolsAndDeployment = [
  {
    icon: <FaDatabase className="card-icon" />,
    title: "MongoDB",
    description:
      "NoSQL database used in MERN stack. <a href='https://www.mongodb.com/docs/' target='_blank'>MongoDB Docs</a>",
  },
  {
    icon: <FaGithub className="card-icon" />,
    title: "Version Control",
    description:
      "Collaborate and track code using Git and GitHub. <a href='https://docs.github.com/en' target='_blank'>GitHub Docs</a>",
  },
];

const LearnCode = () => {
  return (
    <div className="content-container">
      <h2 className="content-title">Learn Code</h2>

      <h3 className="section-heading">💻 Programming Concepts</h3>
      <div className="card-grid">
        {programmingConcepts.map((card, index) => (
          <div key={index} className="content-card">
            {card.icon}
            <h3>{card.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: card.description }} />
          </div>
        ))}
      </div>

      <h3 className="section-heading">🌐 Web Development Technologies</h3>
      <div className="card-grid">
        {webTechStack.map((card, index) => (
          <div key={index} className="content-card">
            {card.icon}
            <h3>{card.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: card.description }} />
          </div>
        ))}
      </div>

      <h3 className="section-heading">🎨 CSS & JavaScript</h3>
      <div className="card-grid">
        {cssJs.map((card, index) => (
          <div key={index} className="content-card">
            {card.icon}
            <h3>{card.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: card.description }} />
          </div>
        ))}
      </div>

      <h3 className="section-heading">🚀 Tools & Deployment</h3>
      <div className="card-grid">
        {toolsAndDeployment.map((card, index) => (
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

export default LearnCode;
