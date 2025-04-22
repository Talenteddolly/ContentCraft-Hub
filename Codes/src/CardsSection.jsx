import "bootstrap/dist/css/bootstrap.min.css";
import "./cards.css";
import "./App.css";
import { Link } from "react-router-dom";

// Importing icons from react-icons
import {
  FaPenNib,
  FaUserTie,
  FaCode,
  FaUsers,
  FaLightbulb,
  FaNewspaper,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

// Cards Section Component
const CardsSection = () => {
  const cards = [
    {
      title: "Content Writing",
      description: "Write content and make it visible to people.",
      image:
        "https://th.bing.com/th/id/OIP.zLoD3TgcO0xYbDNsQIDnvAHaHK?rs=1&pid=ImgDetMain",
      icon: <FaPenNib className="btn-icon" />,
      shortTitle: "Write Content",
      link: "/write-content",
    },
    {
      title: "Portfolio Building",
      description:
        "Guide to build the perfect portfolio for yourself and your company.",
      image:
        "https://marketplace.canva.com/EAFignEDSxM/1/0/1131w/canva-gold-and-blue-watercolor-creative-portfolio-cover-page-sgeL058nE7Y.jpg",
      icon: <FaUserTie className="btn-icon" />,
      shortTitle: "Build Portfolio",
      link: "/build-portfolio",
    },
    {
      title: "Coding",
      description:
        "Learn how to make a portfolio with code. Use templates to get started.",
      image:
        "https://static.vecteezy.com/system/resources/previews/000/474/140/original/coding-and-programing-conceptual-illustration-design-vector.jpg",
      icon: <FaCode className="btn-icon" />,
      shortTitle: "Learn Code",
      link: "/learn-code",
    },
    {
      title: "Connect to Users",
      description:
        "Learn their needs and connect. Connect with like-minded people who can help you be better.",
      image:
        "https://www.talentmgt.com/wp-content/uploads/2021/10/AdobeStock_241012786.jpg",
      icon: <FaUsers className="btn-icon" />,
      shortTitle: "User Connect",
      link: "/user-connect",
    },
    {
      title: "Generate Good Content & Tips",
      description: "Get tips and insights on generating high-quality content.",
      image:
        "https://img.freepik.com/premium-photo/3d-concept-isolated-light-bulb_927984-1214.jpg",
      icon: <FaLightbulb className="btn-icon" />,
      shortTitle: "Content Tips",
      link: "/content-tips",
    },
    {
      title: "Feed",
      description:
        "Visit the feed to know what's going on, new projects, and see others’ work while adding yours too.",
      image:
        "https://thumbs.dreamstime.com/b/vector-social-media-post-feed-design-template-195131397.jpg",
      icon: <FaNewspaper className="btn-icon" />,
      shortTitle: "View Feed",
      link: "/news-feed",
    },
  ];

  return (
    <section className="cards-section container py-5">
      <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={card.image} className="card-img-top" alt={card.title} />
              <div className="card-body text-center">
                <h5 className="card-title font-weight-bold">{card.title}</h5>
                <p className="card-text">{card.description}</p>
                <Link to={card.link}>
                  <button className="custom-btn">
                    {card.icon}
                    {card.shortTitle}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default CardsSection;
